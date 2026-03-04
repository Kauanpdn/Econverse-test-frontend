import "./Marcas.scss";
import marcaImg from "../../assets/marca.png";

export default function Marcas() {
    return (
        <section className="marcas">
            <h2 className="marcas__titulo">Navegue por marcas</h2>

            <div className="marcas__container">
                {[1, 2, 3, 4, 5].map((item) => (
                    <img
                        key={item}
                        src={marcaImg}
                        alt="Marca Econverse"
                        className="marca__imagem"
                    />
                ))}
            </div>
        </section>
    );
}
