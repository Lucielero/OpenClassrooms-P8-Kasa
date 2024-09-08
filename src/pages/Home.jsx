import Cards from "../components/Card";
import logements from "../data/logements.json";
import Banner from "../components/Banner";

const Home = () => {
    return (
      <div className="home">
          <Banner image="/images/home_hero_background.jpg" text="Chez vous, partout et ailleurs" />
          <div className="gallery-container">
            <div className="gallery">
              <Cards logements={logements} />
            </div>
          </div>
      </div>
    );
  };
  
export default Home; 