import React from "react";
import TheBestEcommerce from "../../assets/footer/TheBestEcommerceIcon.js";
import cippec from "../../assets/footer/cippec.png";
import BidLab from "../../assets/footer/bidLab.png";
import empresaComprometida from "../../assets/footer/empresaComprometida.png";

const Reconocimientos = () => {
  return (
    <section className="awards">
      <div class="award">
          <TheBestEcommerce />
         <p>
          <b>Mejor agencia eCommerce</b>
          <br />
          Paraguay 2021
        </p>
      </div>
      <div class="award">
        <span className="bidLab">
        <img src={BidLab} />
        </span>
      </div>
      <div class="award">
        <span className="cippec">
         <img src={cippec} />
        </span>
      </div>
      <div class="award">
        <span className="empresaComprometidaIcon">
        <img src={empresaComprometida} />
        </span>
        <p>
          <b>
            Empresa comprometida con la
            <br />
            Responsabilidad Social Empresaria OMS
          </b>
        </p>
      </div>
    </section>
  );
};

export default Reconocimientos;
