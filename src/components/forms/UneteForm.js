import React from "react";
import "./inputs.css";
import SubmitButton from "./SubmitButton";
//validación del formulario
import { Field, Form, ErrorMessage } from "formik";
import { Formik } from "formik";
import * as Yup from "yup";

const UneteForm = ({ handleSubmit }) => {
  const action = "sent-join-msg";
  const formCollection = 'Innewer';
  const formShema = Yup.object().shape({
    Nombre: Yup.string().required("Campo requerido"),
    Email_Telefono: Yup.string().required("Campo requerido"),
    Portafolio: Yup.string().required("Campo requerido"),
    Especialidad: Yup.string().required("Campo requerido"),
    Descripcion: Yup.string().required("Campo requerido"),
  });
  const values = {
    Nombre: "",
    Email_Telefono: "",
    Portafolio: "",
    Especialidad: "",
    Descripcion: "",
  };
  return (
    <Formik
      initialValues={values}
      validationSchema={formShema}
      onSubmit={(formData, { resetForm }) => handleSubmit(formData, resetForm, action, formCollection)}
    >
      {({ handleChange, values, isSubmitting }) => (
        <Form className="form-main unete-container">
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
          <div className="inputs-containers">
            <label>Tu especialidad*</label>
            <Field
              className="input-field"
              type="text"
              name="Especialidad"
              onChange={handleChange}
              value={values.Especialidad}
            />
            <span>
              <ErrorMessage name="Especialidad" />
            </span>
          </div>

          <div className="inputs-containers">
            <label>URL de tu portafolio*</label>
            <Field
              className="input-field"
              type="text"
              name="Portafolio"
              onChange={handleChange}
              value={values.Portafolio}
            />
            <span>
              <ErrorMessage name="Portafolio" />
            </span>
          </div>
          <div className="inputs-containers input-textarea">
            <label>Cuéntanos más de ti*</label>
            <Field
              as="textarea"
              className="input-field"
              type="text"
              name="Descripcion"
              onChange={handleChange}
              value={values.Descripcion}
            />
            <span>
              <ErrorMessage name="Descripcion" />
            </span>
          </div>
          <SubmitButton isSubmitting={isSubmitting}/>
        </Form>
      )}
    </Formik>
  );
};

export default UneteForm;
