import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
const Home = () => {
  const [randomBeer, setRandomBeer] = useState();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((data) => setRandomBeer(data))
      .catch((error) => console.log("Keine Daten vohanden", error));
  }, []);

  console.log(randomBeer);

  return (
    <section className="hero_section">
      <article>
        <h1>Mystic Mac</h1>
        <p className="big_sub">Notorious Beer</p>
        <p className="hero_descr">
          Discover Notorious Beer: where bold flavors and legendary
          craftsmanship unite. Join us in celebrating the art of brewing
          excellence. Cheers to unforgettable moments!
        </p>
        {randomBeer ? (
          <div className="link_wrapper">
            <Link to="/overview">All Beers</Link>
            <Link className="hero_btn2" to={`/details/${randomBeer._id}`}>
              Random Beer
            </Link>
          </div>
        ) : (
          <p>Loading..</p>
        )}
      </article>
    </section>
  );
};

export default Home;
