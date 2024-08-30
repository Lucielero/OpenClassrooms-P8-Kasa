import React, {useState} from "react";
import ArrowRight from "/images/right_arrow.png";
import ArrowLeft from "/images/left_arrow.png";

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalImages = images.length;

    const PrevImgSlideshow = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? totalImages - 1 : prevIndex -1));
    };

    const NextImgSlideshow = () => {
        setCurrentIndex(prevIndex => (prevIndex === totalImages - 1 ? 0 : prevIndex +1));
    };
    
    return (
        <div className="slideshow">
            {totalImages > 1 && (
                <button className="slideshow__arrow slideshow__arrow-left" onClick={PrevImgSlideshow}>
                    <img src={ArrowLeft} alt="Flèche gauche" />
                </button>
            )}
            <div className="slideshow__slide">
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="slideshow__image"  />
            </div>
            {totalImages > 1 && (
                <button className="slideshow__arrow slideshow__arrow-right" onClick={NextImgSlideshow}>
                    <img src={ArrowRight} alt="Flèche droite" />
                </button>
            )}
            {totalImages > 1 && (
                <div className="slideshow__pagination">
                    {`${currentIndex + 1} / ${totalImages}`}
                </div>
            )}
        </div>
    );
};

export default Slideshow
