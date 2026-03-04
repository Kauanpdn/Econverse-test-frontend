import "./ProductCard.scss";

export function ProductCard({ product, onClick }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />

            <p className="description">
                {product.description}
            </p>

            <p className="old-price">
                R$ {product.oldPrice?.toFixed(2)}
            </p>

            <p className="price">
                R$ {product.price.toFixed(2)}
            </p>

            <p className="installments">
                ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros
            </p>

            <span className="free-shipping">Frete grátis</span>

            <button
                className="buy-button"
                onClick={() => onClick(product)}
            >
                COMPRAR
            </button>
        </div>
    );
}