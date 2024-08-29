import React, {useState} from "react";
import {useParams} from "react-router-dom";
import logements from "../data/logements.json";

//Images 
import ArrowRight from "/images/right_arrow.png";
import ArrowLeft from "/images/left_arrow.png";
import starActive from "/images/star_active.png";
import starInactive from "/images/star_inactive.png";
import ArrowUp from "/images/arrow_up.png";
import ArrowDown from "/images/arrow_down.png";

const findLogementID =(id)=> logements.find((logement)=>logement.id === id);

const Logement = () => {
  const{id} = useParams();
  const logement = findLogementID(id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (section) => {
    setOpenDropdown(prevSection => (prevSection === section ? null : section));
  };  
  if (!logement) {
    return <p>Logement introuvable</p>;
  }
  const { pictures, title, description, host, rating, location, equipments, tags } = logement;
  const PrevImgSlideshow = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };
  const NextImgSlideshow = () => {
    setCurrentIndex(prevIndex => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="logement-container">
      {/*Carousel à faire*/}
      {pictures.length > 1 && (
        <div className="slideshow">
          <button className="arrow left-arrow" onClick={PrevImgSlideshow}>
            <img src={ArrowLeft} alt="Flèche gauche" />
          </button>
          <div className="slide">
            <img src={pictures[currentIndex]} alt={"Image $ {currentIndex + 1}"} />
          </div>
          <button className="arrow right-arrow" onClick={NextImgSlideshow}>
            <img src={ArrowRight} alt="Flèche droite" />
          </button>
          <div className="pagination">
            {pictures.map((_, index) => (
              <span 
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
      {/*Infos*/}
      <div className="info-container">
        <div className="heading">
          {/*Titre et Localisation*/}
          <div className="title-location">
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <div className="host-info">
          <p>{host.name}</p>
          <img src={host.picture} alt={`Photo de ${host.name}`} className="host-picture" />
          </div>
        </div>
        {/*Note*/}
        <div className="tags-rating">
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <img 
                key={index}
                src={index < rating ? starActive : starInactive}
                alt={index < rating ? "Étoile pleine" : "Étoile vide"}
                className="star"
              />
            ))}
          </div>
        </div>
        <div className="dropdown-container">
          {/*Dropdown Description*/}
          <div className="dropdown" onClick={() => toggleDropdown("description")}>
            <h2 className="dropdown_title">Description</h2>
            <img 
              src={openDropdown === "description" ? ArrowUp : ArrowDown}
              alt={openDropdown === "description" ? "Flèche vers le haut" : "Flèche vers le bas"}
              className="dropdown_arrow"
            />
            {openDropdown === "description" && (
              <div className="dropdown_content">
                <p>{description}</p>
              </div>
              )}
          </div>
          {/*Dropdown Equipements*/}
          <div className="dropdown" onClick={() => toggleDropdown("equipments")}>
            <h2 className="dropdown_title">Équipements</h2>
            <img 
              src={openDropdown === "equipments" ? ArrowUp : ArrowDown}
              alt={openDropdown === "equipments" ? "Flèche vers le haut" : "Flèche vers le bas"}
              className="dropdown_arrow"
            />
            {openDropdown === "equipments" && (
              <div className="dropdown_content">
                <ul>
                  {equipments.map((equipments, index) => (
                    <li key={index}>{equipments}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          </div>
        </div>
    </div>
  );
};
  
export default Logement; 