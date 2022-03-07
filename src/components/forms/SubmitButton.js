import React from "react";
import "./submitButton.css";
import Loader from '../../assets/forms/Loader'

const SubmitButton = ({ isSubmitting }) => {
  return (
    <div className="submit-container">
      <button type="submit" className="submit-button" disabled={isSubmitting}>
        {isSubmitting ? <Loader /> : "Enviar"}
      </button>
    </div>
  );
};

export default SubmitButton;
