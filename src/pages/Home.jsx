import Cards from "../components/Card";
import logements from "../data/logements.json";

const Home = () => {
    return (
      <div className="home">
          <div className="banner">
            <img src="/images/home_hero_background.jpg" alt="Image d'un océan"/>
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
          <div className="gallery-container">
            <div className="gallery">
              <Cards logements={logements} />
          </div>
          </div>
          
      </div>
    );
  };
  
export default Home; 