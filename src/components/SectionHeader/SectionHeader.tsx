import "./SectionHeader.scss";

interface Props {
    title: string;
}

const SectionHeader = ({ title }: Props) => {
    return (
        <div className="section-header">
            <div className="section-header__wrapper">
                <span className="line" />
                <h2>{title}</h2>
                <span className="line" />
            </div>
        </div>
    );
};

export default SectionHeader;
