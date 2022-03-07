import React, { useState, useRef } from "react";
import Forms from "./Forms";
import TitlesBox from "./TitlesBox";
import Switch from "./Switch";

const Index = () => {
  const [isContacto, setIsContacto] = useState(true);
  const [isAnimation, setIsAnimation] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const boxRef = useRef();
  const formBox = useRef();

  const handleChange = () => {
    setIsAnimation(!isAnimation);
    setTimeout(() => {
      setIsContacto(!isContacto);
    }, 160);
  };

  return (
    <section 
      ref={formBox}
      id="form-box" className={isAnimation ? "animationActive" : ""}
    >
      <Switch handleChange={handleChange} isAnimation={isAnimation} />
      <div id="form-main-container">
        <div id="switch-form-container">
          <section
            className={`form-container ${
              isContacto ? "" : "form-container-active"
            }`}
          >
            <Forms 
              isContacto={isContacto} 
              boxRef={boxRef}
              formBox={formBox}
              setErrorMsg={setErrorMsg}
            />
          </section>
        <div className="campo-requerido">* Campo requerido</div>
        </div>
        <TitlesBox 
          isContacto={isContacto} 
          boxRef={boxRef}
          errorMsg={errorMsg}
        />
      </div>
    </section>
  );
};

export default Index;
