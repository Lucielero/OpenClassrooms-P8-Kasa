import React, { useState } from "react";
import Collapse from "../components/Collapse";
import ArrowUp from "/images/arrow_up.png";
import ArrowDown from "/images/arrow_down.png";

const About = () => {
  return (
    <div className="about">
      <div className="about__banner banner">
        <img src="/images/about_hero_background.jpg" alt="Images de montagnes" />
      </div>
      <div className="about__collapse__container">
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          content="Le respect est essentiel dans toutes nos interactions, que ce soit avec les clients ou les partenaires."
        />
        <Collapse
          title="Service"
          content="Nous nous engageons à offrir un service client exceptionnel et à répondre à toutes vos questions et préoccupations."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est une priorité pour nous. Nous veillons à ce que toutes les informations et transactions soient protégées."
        />
      </div>
    </div>
  )
};
  
export default About; 