import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import pokeball from "../../Utils/pokeball.png";
import gif from "../../Utils/gifLanding.gif";
import titulo from "../../Utils/titulo.png";

function Landing() {
  return (
    <div className="containerLanding">
      <div className="containerLeft">
        <img className="titulo" src={titulo} alt="" />
        <Link to="/home">
          <img className="pokeball" src={pokeball} alt="" />
        </Link>
      </div>
      <div className="containerRigth">
        <img className="img" src={gif} alt="gif de inicio" />
      </div>
    </div>
  );
}

export default Landing;
