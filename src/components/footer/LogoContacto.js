import React from "react";
import { LogoFooter } from "../../assets/LogoInnew.js";
import PhoneLogo from "../../assets/footer/PhoneLogo";
import {
  BanderaArg,
  BanderaEsp,
  BanderaPy,
} from "../../assets/footer/Banderas";
import { Email, Linkedin, Instagram } from "../../assets/footer/ContactosIcons";

//Para scroll automático a las secciones de la página
import { animateScroll as scroll } from "react-scroll";

const LogoContacto = () => {
  return (
    <div className="logoContacto-row">
     <section 
        style={{cursor: 'pointer'}}
        className="logoColumn" 
        onClick={() => scroll.scrollToTop()}
      >
        <LogoFooter />
      </section>

      <section className="locationColumn">
        <div className="locationArg location">
          <span className="">
            <BanderaArg width={16} height={11} />
          </span>
          <section>
            <p style={{ margin: ".3rem" }}>
              <b>Argentina | Resistencia</b> <br />
              Laprida 406
            </p>
          </section>
          <section className="phoneNumber">
            <p style={{ margin: ".3rem" }} className="">
              <PhoneLogo />
              <a href="tel:+5493624398876">+54 9 362 439 8876</a>
            </p>
          </section>
        </div>

        <div className="locationEsp location">
          <span className="">
            <BanderaEsp />
          </span>
          <section>
            <p style={{ margin: ".3rem" }}>
              <b>Madrid | España</b> <br />
              Huerta de la Sacedilla N6
            </p>
          </section>
          <section className="phoneNumber">
            <p style={{ margin: ".3rem" }} className="phoneNumber">
              <PhoneLogo />
              <a href="tel:+34670471522">+34 670 47 15 22</a>
            </p>
          </section>
        </div>

        <div className="locationPy location">
          <span className="">
            <BanderaPy />
          </span>
          <section>
            <p style={{ margin: ".3rem" }}>
              <b>Paraguay | Asunción</b> <br />
              Aviadores del Chaco 2351
            </p>
          </section>
          <section className="phoneNumber">
            <p style={{ margin: ".3rem" }}>
              <PhoneLogo />
              <a href="tel:+59521689810">+595 21 689 810</a>
            </p>
          </section>
        </div>
      </section>

      <section className="ContactoRedesColumn">
        <div>
          <p className="mail">
            <a href="mailto:contacto@innew.la">
              <Email />
              contacto@innew.la
            </a>
          </p>
        </div>
        <div className="redesIcons">
          <span className="linkedin">
            <Linkedin />
          </span>
          <span className="instagram">
            <Instagram />
          </span>
        </div>
      </section>
    </div>
  );
};

export default LogoContacto;
