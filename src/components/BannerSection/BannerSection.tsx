import { SecondaryBanner } from "../SecondaryBanner/SecondaryBanner";
import bannerImg from "../../assets/banner.png";
import "./BannerSection.scss";

export const BannerSection = () => {
    return (
        <section className="banner-section">
            <SecondaryBanner
                backgroundImage={bannerImg}
                title="Parceiros"
                description="Lorem ipsum dolor sit amet, consectetur."
                buttonText=""
            />

            <SecondaryBanner
                backgroundImage={bannerImg}
                title="Parceiros"
                description="Lorem ipsum dolor sit amet, consectetur."
                buttonText=""
            />
        </section>
    );
};
