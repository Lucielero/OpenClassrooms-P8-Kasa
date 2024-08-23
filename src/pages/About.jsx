import React, { useState } from "react";


//Images
import ArrowUp from "/images/arrow_up.png";
import ArrowDown from "/images/arrow_down.png";


const About = () => {

    const [openDropdown, setOpenDropdown] = useState (null);

    const toggleDropdown = (section) => {
      setOpenDropdown(prevSection => (prevSection === section ? null : section));
    };

    return (
      <div className="about">
        <div className="banner">
          <img src="/images/about_hero_background.jpg" alt="Image montagnes"/>
        </div>
        <div className="dropdown-container">
          {/*Dropdown*/}
          <div className="dropdown" onClick={() => toggleDropdown("fiabilite")}>
            <h2>Fiabilité</h2>
            <img 
              src={openDropdown === "fiabilite" ? ArrowUp : ArrowDown}
              alt={openDropdown === "fiabilite" ? "Flèche vers le haut" : "Flèche vers le bas"}
              className="dropdown_arrow"
            />
            <div>
              {openDropdown === "fiabilite" && (
                <div className="dropdown_content">
                  <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </div>
              )}
            </div>
          </div>
          <div className="dropdown" onClick={() => toggleDropdown("respect")}>
            <h2>Respect</h2>
            <img 
              src={openDropdown === "respect" ? ArrowUp : ArrowDown}
              alt={openDropdown === "respect" ? "Flèche vers le haut" : "Flèche vers le bas"}
              className="dropdown_arrow"
            />
            <div>
              {openDropdown === "respect" && (
                <div className="dropdown_content">
                  <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
              )}
            </div>
          </div>
          <div className="dropdown" onClick={() => toggleDropdown("service")}>
            <h2>Service</h2>
            <img 
              src={openDropdown === "service" ? ArrowUp : ArrowDown}
              alt={openDropdown === "service" ? "Flèche vers le haut" : "Flèche vers le bas"}
              className="dropdown_arrow"
            />
            <div>
              {openDropdown === "service" && (
                <div className="dropdown_content">
                  <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
                </div>
              )}
            </div>
          </div>
          <div className="dropdown" onClick={() => toggleDropdown("securite")}>
            <h2>Sécurité</h2>
            <img 
              src={openDropdown === "securite" ? ArrowUp : ArrowDown}
              alt={openDropdown === "securite" ? "Flèche vers le haut" : "Flèche vers le bas"}
              className="dropdown_arrow"
            />
            <div>
              {openDropdown === "securite" && (
                <div className="dropdown_content">
                  <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageursn chaque logement correspond aux critères de sécurité établis par nos services. En laisant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>  
    );
  };
  
export default About; 