import { useState } from "react";
import "./ProductModal.scss";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }) {
    const [quantity, setQuantity] = useState(1);

    if (!product) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>
                    ✕
                </button>

                <div className="modal-content">
                    <div className="modal-image">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="modal-info">
                        <h2>{product.name}</h2>

                        <p className="modal-price">
                            R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </p>

                        <p className="modal-description">
                            {product.description}
                        </p>

                        <a href="#" className="details-link">
                            Veja mais detalhes do produto &gt;
                        </a>

                        <div className="modal-actions">
                            <div className="quantity">
                                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>

                            <button className="buy-button">
                                COMPRAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}