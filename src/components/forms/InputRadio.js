import React from "react";
import "./inputRadio.css";
import { ErrorMessage } from "formik";

const InputRadio = ({ handleChange, values }) => {
  return (
    <>
      <div className="inputs-radio-container">
        <label class="content-input">
          Implementación
          <input
            type="radio"
            name="Asunto"
            id="implementacion"
            onChange={handleChange}
            value="Implementacion"
          />
          <i></i>
        </label>
        <label class="content-input label2">
          Soporte | Evolutivo | Consultoría Ecommerce
          <input
            type="radio"
            name="Asunto"
            id="Soporte | Evolutivo | Consultoría Ecommerce"
            onChange={handleChange}
            value="Soporte"
          />
          <i></i>*
        </label>
      </div>
      <span>
        <ErrorMessage name="Asunto" />
      </span>
    </>
  );
};

export default InputRadio;
