import React from "react";
import { LogoHeader } from "../../assets/LogoInnew";
import "./Nav.css";
import LanguagesIcon from "../../assets/header/LanguagesIcon";
import AgendarReuButton from "./AgendarReuButton";

//Para scroll automático a las secciones de la página
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = ({ t, i18n }) => {
  const changeLanguage = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <nav>
      <LogoHeader />
      <ul className="web-section">
        <li>
          <Link
            activeClass="active"
            to="casos"
            spy={true}
            smooth={true}
            offset={-500}
            duration={1000}
          >
            {t("header.cases")}
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="ecommerce-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            ECOMMERCE
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="vtex-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            VTEX
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="innewers-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            INNEWERS
          </Link>
        </li>
      </ul>
      <AgendarReuButton t={t} padding="0.4rem 0.5rem 0.5rem 0.5rem" />
      <div className="laguage-container">
        <LanguagesIcon />
        <select onChange={changeLanguage} className="change-language">
          <option value="es">Es</option>
          <option value="en">En</option>
        </select>
      </div>
    </nav>
  );
};

export default Nav;
