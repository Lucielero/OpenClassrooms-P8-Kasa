import React, {useState} from "react";
import {useParams} from "react-router-dom";
import logements from "../data/logements.json";
import Collapse from "./Collapse";

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
    <div className="logement">
      {/*Carousel à faire*/}
      {pictures.length > 1 && (
        <div className="logement__carousel">
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
      <div className="logement__info">
        <div className="logement__header">
          <div className="logement__title-location">
            <h1 className="logement__title">{title}</h1>
            <p className="logement__location">{location}</p>
          </div>
          <div className="logement__host">
          <p className="logement__host-name">{host.name}</p>
          <img src={host.picture} alt={`Photo de ${host.name}`} className="logement__host-picture" />
          </div>
        </div>
        {/*Note*/}
        <div className="logement__details">
          <div className="logement__tags">
            {tags.map((tag, index) => (
              <span key={index} className="logement__tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="logement__rating">
            {[...Array(5)].map((_, index) => (
              <img 
                key={index}
                src={index < rating ? starActive : starInactive}
                alt={index < rating ? "Étoile pleine" : "Étoile vide"}
                className="logement__star"
              />
            ))}
          </div>
        </div>
        <div className="collapse-container">
          <Collapse 
            title="Description"
            content={<p>{description}</p>}
          />
          <Collapse 
            title="Équipements"
            content={
              <ul>
                {equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};
  
export default Logement; 