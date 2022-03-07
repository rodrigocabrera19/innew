import React from "react";
import "./inputs.css";
import InputRadio from "./InputRadio";
import SubmitButton from "./SubmitButton";
//validación del formulario
import { Field, Form, ErrorMessage } from "formik";
import { Formik } from "formik";
import * as Yup from "yup";

const ContactForm = ({ handleSubmit }) => {
  const action = "sent-contacto-msg";
  const formCollection = 'Contactos';

   
  const formShema = Yup.object().shape({
    Nombre: Yup.string().required("Campo requerido"),
    Email_Telefono: Yup.string().required("Campo requerido"),
    Empresa: Yup.string().required("Campo requerido"),
    Web_actual: Yup.string().required("Campo requerido"),
    Asunto: Yup.string().required("Campo requerido")
  });
  const values = {
    Nombre: "",
    Email_Telefono: "",
    Web_actual: "",
    Empresa: "",
    Asunto: ""
  }; 

  return (
    <Formik
      initialValues={values}
      validationSchema={formShema}
      onSubmit={(formData, { resetForm }) => handleSubmit(formData, resetForm, action, formCollection)}
    >
      {({ handleChange, values, isSubmitting }) => (
        <Form className="form-main contacto-container">
          <div className="inputs-containers">
            <label>Tu nombre*</label>
            <Field
              className="input-field"
              type="text"
              name="Nombre"
              onChange={handleChange}
              value={values.Nombre}
            />
            <span>
              <ErrorMessage name="Nombre" />
            </span>
          </div>

          <div className="inputs-containers">
            <label>Email o teléfono*</label>
            <Field
              className="input-field"
              type="text"
              name="Email_Telefono"
              onChange={handleChange}
              value={values.Email_Telefono}
            />
            <span>
              <ErrorMessage name="Email_Telefono" />
            </span>
          </div>

          <div className="inputs-containers input-empresa">
            <label>Tu empresa*</label>
            <Field
              className="input-field"
              type="text"
              name="Empresa"
              onChange={handleChange}
              value={values.Empresa}
            />
            <span>
              <ErrorMessage name="Empresa" />
            </span>
          </div>
          <div className="inputs-containers input-textarea">
            <label>Link web actual*</label>
            <Field
              className="input-field"
              type="text"
              name="Web_actual"
              onChange={handleChange}
              value={values.Web_actual}
            />
            <span>
              <ErrorMessage name="Web_actual" />
            </span>
            <InputRadio 
              asunto={values.Asunto}
              handleChange={handleChange} 
            />
          </div>
          <SubmitButton isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
