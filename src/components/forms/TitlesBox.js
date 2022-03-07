import React from "react";
import "./TitlesBox.css";
import { TalkWe, Sumate } from "../../assets/forms/formIcons";

const TitlesBox = ({ isContacto, boxRef, errorMsg }) => {
  return (
    <div
      ref={boxRef}
      id="titlesBox-container"
      className={isContacto ? "" : "color-change"}
    >
      <div className="overlay">
        <section className="title-container overlay-left">
          <div>
            <TalkWe />
            <h1 className="contacto-title">
              Habla con
              <br />
              <span>nosotros!</span>
            </h1>
            <p className="contacto-legend">
              Si quieres dar el gran paso, nosotros te ayudamos
            </p>
          </div>
        </section>

        <section className="title-container overlay-right">
          <div>
            <Sumate />
            <h1 className="sumate-title">
              Convertite en un
              <br />
              <span>innewer!</span>
            </h1>
            <p className="sumate-legend">
              ¡Sumate a nuestro equipo y hacé cosas increíbles!
            </p>
          </div>
        </section>
      </div>

      {errorMsg ? (
        <>
          <h3>
            <span>¡Algo malio sal!</span>
            <br /> Vuelve a intentarlo más tarde.
          </h3>
          <h3>
            <span>¡Algo malio sal!</span>
            <br /> Vuelve a intentarlo más tarde.
          </h3>
        </>
      ) : (
        <>
          <h3>
            <span>¡Muchas gracias!</span>
            <br /> El mensaje se ha enviado con éxito.
          </h3>
          <h3>
            <span>¡Muchas gracias!</span>
            <br /> El mensaje se ha enviado con éxito.
          </h3>
        </>
      )}
      <div class="contact-msg"></div>
      <div class="join-msg"></div>
    </div>
  );
};

export default TitlesBox;
