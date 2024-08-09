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
      <div className="pictures">
        {pictures.map((picture,index)=> {
          return (
            <img src={picture} alt={picture.title} key={(picture,index)}/>
          )
        })}  
      </div>
      <p>{logement.title}</p>
      
      <p>Voici la description du logement {logement.description}</p>
    </div>
  );
};
  
export default Logement; 