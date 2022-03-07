import React from "react";
import ContactForm from "./ContactForm";
import UneteForm from "./UneteForm";
import "./formsStyles.css";

//Firestore de firebase
import db from "../../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

const Forms = ({ isContacto, boxRef, formBox, setErrorMsg }) => {
  const handleSubmit = (formData, resetForm, action, formCollection) => {
    //Add de data de los forms en las colecciones 'Contactos' e 'Innewwer'
    const setData = async () => {
      //Se selecciona el contenedor de los títulos y de los forms para darles class que activarán las animaciones de mensaje exitoso
      const titleBoxContainer = boxRef.current;
      const formBoxContainer = formBox.current;

      titleBoxContainer.classList.remove(action);
      try {
        const contactData = await addDoc(
          collection(db, formCollection),
          formData
        );
        if (contactData.id !== undefined) {
          //Se quita el mensaje de error al enviar
          setErrorMsg(false);
          //Se agrega una clase global y una clase dependiendo del form que se envía, para activar la animación de mensaje exitoso.
          titleBoxContainer.classList.add(action);
          formBoxContainer.classList.add("sent-msg");

          //Se borran los datos de los inputs
          resetForm();
        } else {
          setErrorMsg(true);
          titleBoxContainer.classList.add(action);
        }
      } catch (e) {
        setErrorMsg(true);
        titleBoxContainer.classList.add(action);
      }
    };
    setData();
  };

  return (
    <>
      {isContacto ? (
        <ContactForm handleSubmit={handleSubmit} />
      ) : (
        <UneteForm handleSubmit={handleSubmit} />
      )}
    </>
  );
};

export default Forms;
