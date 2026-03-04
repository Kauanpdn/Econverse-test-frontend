import "./ProdutoSection.scss";
import SectionHeader from "../SectionHeader/SectionHeader";
import ProductCard from "../ProductCard/ProductCard";

interface Props {
    title: string;
    products: any[];
    extra?: React.ReactNode; // 👈 AQUI ESTÁ A MÁGICA
}

const ProductSection = ({ title, products, extra }: Props) => {
    return (
        <section className="product-section">
            <div className="container">
                <SectionHeader title={title} />

                {/* 👇 Aqui encaixa qualquer coisa */}
                {extra && <div className="section-extra">{extra}</div>}

                <div className="products-wrapper">
                    <button className="arrow left">{"<"}</button>

                    <div className="cards">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                installment={product.installment}
                            />
                        ))}
                    </div>

                    <button className="arrow right">{">"}</button>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
