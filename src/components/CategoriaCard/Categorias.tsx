import { categorias } from "../../data/categoria";
import CategoriaCard from "../CategoriaCard/CategoriaCard";

export default function Categorias() {
    return (
        <div style={{ display: "flex", gap: "24px",maxWidth: "1200px", justifyContent: "center", margin: "40px auto 0 auto",}}>
            {categorias.map((cat) => (
                <CategoriaCard
                    key={cat.id}
                    icone={cat.icone}
                />
            ))}
        </div>
    );
}
