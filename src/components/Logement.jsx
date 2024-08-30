import React, {useState} from "react";
import {useParams} from "react-router-dom";
import logements from "../data/logements.json";
import Collapse from "./Collapse";
import Slideshow from "./Slideshow";

//Images 
import starActive from "/images/star_active.png";
import starInactive from "/images/star_inactive.png";

const findLogementID =(id)=> logements.find((logement)=>logement.id === id);

const Logement = () => {
  const{id} = useParams();
  const logement = findLogementID(id);
  
  if (!logement) {
    return <p>Logement introuvable</p>;
  }

  const { pictures, title, description, host, rating, location, equipments, tags } = logement;

  const [firstName, lastName] = host.name.split(" ");

  return (
    <div className="logement">
      {/*Slideshow*/}
      <div className="logement__slideshow">
        <Slideshow images={pictures} />
      </div>
      {/*Infos Logement*/}
      <div className="logement__info">
        <div className="logement__header">
          <div className="logement__title-location">
            <h1 className="logement__title">{title}</h1>
            <p className="logement__location">{location}</p>
          </div>
          <div className="logement__host">
            <div className="logement__host-name">
              <p className="logement__host-first-name">{firstName}</p>
              <p className="logement__host-last-name">{lastName}</p>
            </div>
            <div>
              <img src={host.picture} alt={`Photo de ${host.name}`} className="logement__host-picture" />
            </div>
          </div>
        </div>
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
        {/*Collapse*/}
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