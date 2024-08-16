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

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  const toggleDescription = () => setIsDescriptionOpen(prev => !prev);
  const toggleEquipments = () => setIsEquipmentsOpen(prev => !prev);


  if (!logement) {
    return <p>Logement introuvable</p>;
  }

  const { pictures, title, description, host, rating, location, equipments, tags } = logement;

  return (
    <div className="logement-container">
      {/*Carousel à faire*/}
      <div className="pictures">
        {pictures.map((picture,index)=> {
          return (
            <img src={picture} alt={picture.title} key={(picture,index)}/>
          )
        })}  
      </div>
      {/*Infos*/}
      <div className="info-container">
        <div className="heading">
          {/*Titre et Localisation*/}
          <div className="title-location">
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <div className="host-info">
          <img src={host.picture} alt={`Photo de ${host.name}`} className="host-picture" />
          <p>{host.name}</p>
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
          <div className="dropdown_description" onClick={toggleDescription}>
            <h2>Description</h2>
            <img 
              src={isDescriptionOpen ? ArrowUp : ArrowDown}
              alt={isDescriptionOpen ? "Flèche vers le haut" : "Flèche vers le bas"}
              className="dropdown_arrow"
            />
            <div>
              {isDescriptionOpen && (
                <div className="dropdown_content">
                  <p>{description}</p>
                </div>
              )}
            </div>
          </div>
          {/*Dropdown Equipements*/}
          <div className="dropdown_equipments" onClick={toggleEquipments}>
            <h2>Équipements</h2>
            <img 
              src={isEquipmentsOpen ? ArrowUp : ArrowDown}
              alt={isEquipmentsOpen ? "Flèche vers le haut" : "Flèche vers le bas"}
              className="dropdown_arrow"
            />
            <div>
              {isEquipmentsOpen && (
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
    </div>
  );
};
  
export default Logement; 