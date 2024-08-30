import React, { useState } from "react";
import ArrowUp from "/images/arrow_up.png";


const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="collapse">
            <div className="collapse__toggle-bar" onClick={toggleCollapse}>
                <h2 className="collapse__title">{title}</h2>
                <img
                    src={ArrowUp}
                    alt={isOpen ? "Flèche vers le bas" : "Flèche vers le haut"}
                    className={`collapse__arrow ${isOpen ? 'open' : ''}`}
                />
            </div>
            {isOpen && (
                <div className={`collapse__content ${isOpen ? 'open' : ''}`}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Collapse;