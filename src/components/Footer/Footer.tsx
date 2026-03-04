import "./Footer.scss";
import ButtonDestaque from "../BottonDestaque/BottonDestaque";

import logo from "../../assets/headerImg/Logo.png";
import socials from "../../assets/sociais.png";

export const Footer = () => {
    return (
        <footer className="footer">
            {/* ================= NEWSLETTER ================= */}
            <div className="footer__newsletter">
                <div className="container newsletter">

                    {/* ESQUERDA */}
                    <div className="newsletter__left">
                        <h2>Inscreva-se na nossa newsletter</h2>
                        <p>
                            Assine a nossa newsletter e receba as novidades e conteúdos
                            exclusivos da Econverse.
                        </p>
                    </div>

                    {/* DIREITA */}
                    <div className="newsletter__right">
                        <div className="newsletter__top">
                            <input type="text" placeholder="Digite seu nome" />
                            <input type="email" placeholder="Digite seu e-mail" />
                            <ButtonDestaque>INSCREVER</ButtonDestaque>
                        </div>

                        <div className="newsletter__checkbox">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms">
                                Aceito os termos e condições
                            </label>
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= MAIN ================= */}
            <div className="footer__main">
                <div className="container footer__grid">

                    {/* COLUNA 1 */}
                    <div className="footer__brand">
                        <img src={logo} alt="Econverse" className="footer__logo" />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <img
                            src={socials}
                            alt="Redes sociais"
                            className="footer__socials"
                        />
                    </div>

                    {/* LINHA DIVISÓRIA */}
                    <div className="footer__divider" />

                    {/* COLUNAS DIREITA */}
                    <div className="footer__links">
                        <div>
                            <h4>Institucional</h4>
                            <ul>
                                <li>Sobre Nós</li>
                                <li>Movimento</li>
                                <li>Trabalhe conosco</li>
                            </ul>
                        </div>

                        <div>
                            <h4>Ajuda</h4>
                            <ul>
                                <li>Suporte</li>
                                <li>Fale Conosco</li>
                                <li>Perguntas Frequentes</li>
                            </ul>
                        </div>

                        <div>
                            <h4>Termos</h4>
                            <ul>
                                <li>Termos e Condições</li>
                                <li>Política de Privacidade</li>
                                <li>Troca e Devolução</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* ================= BOTTOM ================= */}
            <div className="footer__bottom">
                <div className="container">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </footer>
    );
};