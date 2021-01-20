import React, { useState, useEffect } from "react";
import { fetchData } from "../services/sw-service";

const Starships = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetchData("starships", count);
        setData(response);
      } catch (error) {
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
      {data ? (
        <div>
          <img
            onError={addDefaultImage}
            src={`https://starwars-visualguide.com/assets/img/starships/${count}.jpg`}
            alt={data.name}
            className="object_image"
          />
          <h3>{data.name}</h3>
          <p>Model: {data.model}</p>
          <p>Cargo capacity: {data.cargo_capacity}</p>
          <p>Crew: {data.crew}</p>
        </div>
      ) : (
        <p>Error, No such object, click Next</p>
      )}
    </div>
  );
};

export default Starships;
