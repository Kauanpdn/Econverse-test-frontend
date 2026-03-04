import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import { ProductCard } from "./ProductCard";
import "./ProductGrid.css";

export function ProductGrid({ onSelectProduct }) {
  const [products, setProducts] = useState([]);

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