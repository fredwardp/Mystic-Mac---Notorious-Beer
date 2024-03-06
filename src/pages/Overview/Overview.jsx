import { useEffect, useState } from "react";
import "./Overview.css";
import { Link } from "react-router-dom";
const Overview = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((allData) => setAllData(allData))
      .catch((error) => console.log("keine daten vorhanden", error));
  });

  return (
    <section className="overview_section">
      <div className="overview_hero_div">
        <a className="scroll_btn" href="#products">
          <h1>
            Click <span>for</span> Beer
          </h1>
        </a>
      </div>
      <div id="products" className="product_wrapper">
        {allData ? (
          allData.map((beer, index) => (
            <article key={index}>
              <div className="img_wrapper">
                <div className="img_bright"></div>
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className="beer_content">
                <h2>{beer.name}</h2>
                <p className="sub">{beer.tagline}</p>
                <p className="creator">{beer.contributed_by}</p>
                <Link to={`/details/${beer._id}`}>Details</Link>
              </div>
            </article>
          ))
        ) : (
          <p>Still brewing..</p>
        )}
      </div>
    </section>
  );
};

export default Overview;
