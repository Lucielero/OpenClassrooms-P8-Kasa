import Cards from "../components/Thumb";
import logements from "../data/logements.json";

const Home = () => {
    return (
      <div className="home">
          <div className="banner">
            <img src="/images/home_hero_background.jpg" alt="Image d'un océan"></img>
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
          <div className="gallery">
            <Cards logements={logements} />
          </div>
      </div>
    );
  };
  
export default Home; 