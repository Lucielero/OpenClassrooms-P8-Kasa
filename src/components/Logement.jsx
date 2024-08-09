import {useParams} from "react-router-dom";
import logements from "../data/logements.json";

const findLogementID =(id)=>{
  return logements.find((logement)=>logement.id === id);
}

const Logement = () => {
  const{id} = useParams();
  const logement = findLogementID(id);
  const pictures = logement.pictures;
  return (
    <div>
      <p>Voici le logement avec l'id {id}</p>
      <p>Voici le titre du logement {logement.title}</p>
      <p>Voici la description du logement {logement.description}</p>
      <div className="pictures">
        {pictures.map((picture,index)=> {
          return (
            <img src={picture} alt={picture.title} key={picture,index}/>
          )
          })
        }  
      </div>
    </div>
  );
};
  
export default Logement; 