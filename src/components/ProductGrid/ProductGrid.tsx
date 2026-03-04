import { useEffect, useState } from "react";
import { getProducts } from "../../service/api";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductGrid.scss";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
}

interface ProductGridProps {
  onSelectProduct: (product: Product) => void;
}


export function ProductGrid({ onSelectProduct } : ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <section className="products-section">
      <h2 className="section-title">Produtos relacionados</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={onSelectProduct}
          />
        ))}
      </div>
    </section>
  );
}