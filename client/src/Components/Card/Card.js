import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
function Card({ image, name, types, id }) {
  return (
    <div className={style.card}>
      <Link className={style.linkContainer} to={`/pokemon/${id}`}>
        <p>{name}</p>
        <img className={style.cardImg} src={image} alt="Imagen de pokemos" />
      </Link>

      <div className={style.cardContent}>
        {types?.map((type) => {
          return (
            <p className={style.type} key={type.id}>
              {type.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
