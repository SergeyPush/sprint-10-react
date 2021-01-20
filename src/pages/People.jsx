import React, { useState, useEffect } from "react";
import { fetchData } from "../services/sw-service";

const People = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetchData("people", count);
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
            className="object_image"
            src={`https://starwars-visualguide.com/assets/img/characters/${count}.jpg`}
            alt={data.name}
            onError={addDefaultImage}
          />
          <h3>{data.name}</h3>
          <p>Gender: {data.gender}</p>
          <p>Birth: {data.birth_year}</p>
          <p>Eyes color: {data.eye_color}</p>
        </div>
      )}
    </div>
  );
};

export default People;
