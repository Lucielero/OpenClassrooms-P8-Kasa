import PropTypes from "prop-types";

const Thumb = ({logements}) => {
    return (
        //boucle pour chaque logement
        logements.map((logement) => (
            <div className="thumb" key={logement.id}>
                <img src={logement.cover} alt={logement.title}></img>
                <h3>{logement.title}</h3>
            </div>
        ))
    );
};

Thumb.propTypes={
    logements: PropTypes.array.isRequired
}
  
export default Thumb; 