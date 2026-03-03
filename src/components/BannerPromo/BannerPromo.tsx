
import "../BannerPromo/BannerPromo.scss";
import ButtonDestaque from "../BottonDestaque/BottonDestaque";

const BannerPromo = () => {
    return (
        <section className="bannerPromo">

            <div className="bannerPromo__overlay"></div>

            <div className=" bannerPromo__content">
                <div className="container">
                <h1>Venha conhecer nossas<br></br> promoções</h1>
                <p><span>50% off</span> nos produtos</p>
                <ButtonDestaque>Ver produtos</ButtonDestaque>

                </div>
            </div>
        </section>
    );
};

export default BannerPromo;