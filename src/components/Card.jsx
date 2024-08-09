import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Card = ({logements}) => {
    return (
        //boucle pour chaque logement
        logements.map((logement) => (
            //Affichage dans l'URL logement + id
            <Link to={`/logement/${logement.id}`} className="card" key={logement.id}>
                <img src={logement.cover} alt={logement.title}></img>
                <h3>{logement.title}</h3>
            </Link>
        ))
    );
};

Card.propTypes={
    logements: PropTypes.array.isRequired
}
  
export default Card; 