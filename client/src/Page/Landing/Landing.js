import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import pokeball from "../../Utils/pokeball.png";
import gif from "../../Utils/gifLanding.gif";
import titulo from "../../Utils/titulo.png";

function Landing() {
  return (
    <div className={style.containerLanding}>
      <div className={style.containerLeft}>
        <img className={style.titulo} src={titulo} alt="titulo" />
        <Link to="/home">
          <img className={style.pokeball} src={pokeball} alt="pokeball" />
        </Link>
      </div>
      <div className={style.containerRigth}>
        <img className={style.img} src={gif} alt="gif de inicio" />
      </div>
    </div>
  );
}

export default Landing;
