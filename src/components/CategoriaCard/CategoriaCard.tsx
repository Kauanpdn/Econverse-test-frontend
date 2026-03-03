import "./CategoriaCard.scss";

interface CategoriaCardProps {
    icone: string;
}

export default function CategoriaCard({icone,}: CategoriaCardProps) {
    return (
        <div>
            <div className="icone-box">
                <img src={icone}/>
            </div>
        </div>
    );
}
