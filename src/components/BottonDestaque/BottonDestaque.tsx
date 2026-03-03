import type React from "react";
import "../BottonDestaque/BottonDestasque.scss"

interface ButtonDestaquesProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    variant?: "primary" | "outline";
}

const ButtonDestaque: React.FC<ButtonDestaquesProps> = ({
    children,
    type = "button",
    onClick,
    variant = "primary",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn btn--${variant}`}
        >
            {children}
        </button>
    );
};

export default ButtonDestaque;