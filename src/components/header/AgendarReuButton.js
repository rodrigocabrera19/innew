import React from "react";
import "./AgendarReuButton.css";
//Para scroll automático a las secciones de la página
import { Link } from "react-scroll";


const AgendarReuButton = ({ padding, fontSize, t}) => {
  return (
    <div>
      <Link
        activeClass="active"
        to="form-box"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button 
          style={{ padding: padding, fontSize: fontSize }}
          className="agendar-reunion-btn"
        >
          {t("portada.schedule-meeting")}
        </button>
      </Link>
    </div>
  );
};

export default AgendarReuButton;
