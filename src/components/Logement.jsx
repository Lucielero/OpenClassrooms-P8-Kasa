import {useParams} from "react-router-dom";
import logements from "../data/logements.json";

const findLogementID =(id)=>{
  return logements.find((logement)=>logement.id === id);
}

const Logement = () => {
  const{id} = useParams();
  const logement = findLogementID(id);



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
          <div className="title-location">
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <div className="host-info">
          <img src={host.picture} alt={`Photo de ${host.name}`} className="host-picture" />
          <p>{host.name}</p>
          </div>
        </div>

        <div className="tags-rating">
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="rating">
            
          </div>

        </div>

      </div>

    </div>
  );
};
  
export default Logement; 