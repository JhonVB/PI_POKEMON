import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
function Card({ image, name, types, id }) {
  return (
    <div className="card">
      <Link to={`/pokemon/${id}`}>
        <p>{name}</p>
      </Link>
      <img className="card-img" src={image} alt="Imagen de pokemos" />
      <div className="card-content">
        {types?.map((type) => {
          return (
            <p className="type" key={type.id}>
              {type.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
