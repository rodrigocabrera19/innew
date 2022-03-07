import React from "react";
import deskMerlino from "../../assets/casos/desktop-merlino.png";
import mobileMerlino from "../../assets/casos/mobile-merlino.png";
import { BanderaEsp } from "../../assets/footer/Banderas";

const CasosExitos = () => {
  return (
    <section id="casos-container">
      <div className="">
        <div className="">
          <img
            alt="tienda de merlino en versión escritorio"
            src={deskMerlino}
          />
        </div>
        <div className="">
          <img
            alt="tienda de merlino en versión escritorio"
            src={mobileMerlino}
          />
        </div>
        <div className="text-container">
          <h2>Merlino</h2>
          <BanderaEsp />
          <p>Empresa lider en productos para el hogar</p>
          <button>Ver más</button>
        </div>
      </div>
    </section>
  );
};

export default CasosExitos;
