// Importando css
import "./Header.scss";

//Importando icones
import {
    Search,
    Truck,
    ShieldCheck,
    CreditCard,
} from "lucide-react";

//importando imagens 
import Logo from "../../assets/headerImg/Logo.png";
import iconsHeader from "../../assets/headerImg/iconsHeader.png";

const Header = () => {
    return (
        <header className="header">

            {/* 🔹 Barra Superior */}
            <div className="header__top">
                <div className="container header__top-content">

                    <div className="header__info">
                        <ShieldCheck size={16}/>
                        <span>Compra <strong>100% segura</strong></span>
                    </div>

                    <div className="header__info">
                        <Truck size={16} />
                        <span><strong>Frete grátis</strong> acima de R$ 200</span>
                    </div>

                    <div className="header__info">
                        <CreditCard size={16}/>
                        <span><strong>Parcele</strong> suas compras</span>
                    </div>

                </div>
            </div>

            {/* 🔹 Barra Principal */}
            <div className="header__main">
                <div className="container header__main-content">

                    {/* Logo */}
                    <div className="header__logo">
                        <img src={Logo} alt="Econverse Logo" />
                    </div>

                    {/* Busca */}
                    <div className="header__search">
                        <input
                            type="text"
                            placeholder="O que você está buscando?"
                        />
                        <Search size={20} className="search-icon" />
                    </div>

                    {/* Ícones */}
                    <div className="header__icons">
                        <img src={iconsHeader} alt="Ícones do usuário" />
                    </div>

                </div>
            </div>

            {/* 🔹 Menu Inferior */}
            <div className="header__bottom">
                <div className="container header__menu">

                    <span>TODAS CATEGORIAS</span>
                    <span>SUPERMERCADO</span>
                    <span>LIVROS</span>
                    <span>MODA</span>
                    <span>LANÇAMENTOS</span>
                    <span className="highlight">OFERTAS DO DIA</span>
                    <span>ASSINATURA</span>

                </div>
            </div>

        </header>
    );
};

export default Header;
