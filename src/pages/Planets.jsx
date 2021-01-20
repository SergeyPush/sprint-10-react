import React, { useState, useEffect } from "react";
import { fetchData } from "../services/sw-service";

const Planets = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetchData("planets", count);
        console.log(response);
        setData(response);
      } catch (error) {
        setCount(1);
        setData(null);
      }
    }

    getData();
  }, [count]);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const addDefaultImage = (e) => {
    e.target.src = "./noimage.png";
  };

  return (
    <div className="wrapper">
      <button onClick={increaseCount} className="next_button">
        Next
      </button>

      {data && (
        <div>
          <img
            onError={addDefaultImage}
            src={`https://starwars-visualguide.com/assets/img/planets/${count}.jpg`}
            alt={data.name}
            className="object_image"
          />
          <h3>{data.name}</h3>
          <p>Climate: {data.climate}</p>
          <p>Diameter: {data.diameter}</p>
          <p>Population: {data.population}</p>
        </div>
      )}
    </div>
  );
};

export default Planets;
