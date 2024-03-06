import { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
const Details = () => {
  const [oneBeer, setOneBeer] = useState([]);
  const [getId, setGetId] = useState([]);
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((filterdData) => setOneBeer(filterdData))
      .catch((error) => console.log("no data found", error));
  });

  useEffect(() => {
    const find = oneBeer.find((item) => item._id === id);
    setGetId(find);
  }, [oneBeer]);

  // console.log(getId);

  return (
    <section className="details_section">
      {getId ? (
        <article>
          <div className="img_wrapper">
            <div className="img_bright"></div>
            <img src={getId.image_url} alt={getId.name} />
          </div>
          <div className="info_wrapper">
            <h1>{getId.name}</h1>
            <p className="sub">{getId.tagline}</p>

            <div className="info_wrapper_single">
              <p className="grey">First brewed:</p>
              <p className="grey">{getId.first_brewed}</p>
            </div>
            <div className="info_wrapper_single">
              <p className="grey">Attenuatione level:</p>
              <p className="grey">{getId.attenuation_level}</p>
            </div>
            <p className="descr">{getId.description}</p>
          </div>
        </article>
      ) : (
        <p>Still brewing..</p>
      )}
    </section>
  );
};

export default Details;
