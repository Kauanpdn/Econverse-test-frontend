import "./ProductCard.scss";
import iphone from "../../assets/iphone.png";

interface Props {
    installment: string;
}

const ProductCard = ({
    installment,
}: Props) => {
    return (
        <div className="product-card">
            <img src={iphone} alt="Produto" />

            <span className="installment">{installment}</span>

            <button>COMPRAR</button>
        </div>
    );
};

export default ProductCard;
