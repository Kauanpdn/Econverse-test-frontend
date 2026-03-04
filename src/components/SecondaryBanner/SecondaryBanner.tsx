import "./SecondaryBanner.scss";
import ButtonDestaque from "../BottonDestaque/BottonDestaque";

interface SecondaryBannerProps {
    backgroundImage: string;
    title: string;
    description: string;
    buttonText: string;
    onClick?: () => void;
}

export const SecondaryBanner = ({
    backgroundImage,
    title,
    description,
}: SecondaryBannerProps) => {
    return (
        <div
            className="secondary-banner"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="secondary-banner__overlay" />

            <div className="secondary-banner__content">
                <h2>{title}</h2>
                <p>{description}</p>
                <ButtonDestaque>CONFIRA</ButtonDestaque>
            </div>
        </div>
    );
};
