import React, { useEffect } from "react";
import "./Portada.css";
import EarthIcon from "../../assets/header/EarthIcon";
import VtexLogo from "../../assets/header/VtexLogo";
import AgendarReuButton from "./AgendarReuButton";
import { LogoInnewMobile } from "../../assets/LogoInnew";
import MenuIcon from "../../assets/header/MenuIcon";
import portada from "../../assets/header/portada.png";
import portadaMobile from "../../assets/header/portada-mobile.png";

const Portada = ({ t }) => {
  useEffect(() => {
    window.onload = () => {
      const title = document.querySelectorAll(".title");
      title[0].classList.add("title-animation");
      setTimeout(() => {
        title[1].classList.add("title-animation");
      }, 2000);
    };
  }, []);

  return (
    <div id="portada-container">
      <div className="img-container">
        <img alt="Imagen de portada inicial" src={portada} id="portada-desk" />
        <img
          alt="Imagen de portada inicial"
          src={portadaMobile}
          id="portada-mobile"
        />
      </div>
      <section className="mobile-logo-container">
        <section className="mobile-logo">
          <LogoInnewMobile />
          <MenuIcon />
        </section>
      </section>
      <div className="title-description-container">
        <section className="titulo-principal">
          <div className="">
            <h1 className="title">Expertos en</h1>
            <h1 className="title">eCommerce</h1>
          </div>
          <AgendarReuButton
            t={t}
            padding=".8rem 2.5rem 1rem 2.5rem"
            fontSize="24px"
          />
        </section>
        <section className="destacados">
          <div className="item1">
            <EarthIcon />
          </div>
          <div className="item item2">
            <span>
              +10
              <br />
            </span>
            {t("portada.countries")}
          </div>
          <div className="item item3">
            <span>
              +100
              <br />
            </span>
            {t("portada.projects")}
          </div>
          <div className="item item4">
            <span>
              +50
              <br />
            </span>
            {t("portada.partners")}
          </div>
          <div className="item5">
            <VtexLogo />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portada;
