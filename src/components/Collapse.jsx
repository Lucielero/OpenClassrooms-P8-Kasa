import React, { useState } from "react";
import ArrowUp from "/images/arrow_up.png";
import ArrowDown from "/images/arrow_down.png";

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={toggleCollapse}>
                <h2 className="collapse__title">{title}</h2>
                <img
                    src={isOpen ? ArrowUp : ArrowDown}
                    alt={isOpen ? "Flèche vers le haut" : "Flèche vers le bas"}
                    className="collapse__arrow"
                />
            </div>
            {isOpen && (
                <div className="collapse__content">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Collapse;