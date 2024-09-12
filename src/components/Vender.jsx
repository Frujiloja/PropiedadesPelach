import styles from "./Vender.module.css";
import React, { useState } from "react";
import edificios from "../assets/vecteezy_city-background-illustration-black_22227434.png";
import banner from "../assets/banner tasacion.jpg";



const Vender = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    option: "vender",
    propertyType: "casa",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
  };

  return (
    <div className={styles.contacto_container}>
        <img src={banner} alt="banner" className={styles.banner} />
      <div className={styles.contacto}>
        <h1 className={styles.h1}>
          Las operaciones inmobiliarias se inician con una tasación que debe ser
          justa y profesional, considerando los valores del mercado.
        </h1>
        <br />
        <h2 className={styles.h2}>
          {" "}
          Consúltenos y evacuaremos todas sus inquietudes, brindándole la
          tasación mas adecuada.
        </h2>
        <br />
        <form onSubmit={handleSubmit} className={styles.contact_form}>
          <div className={styles.form_group}>
            <label>Nombre y Apellido</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.form_input}
            />
          </div>

          <div className={styles.form_group}>
            <label>Teléfono</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={styles.form_input}
            />
          </div>

          <div className={styles.form_group}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.form_input}
            />
          </div>

          <div className={styles.form_group}>
            <label>Vender o Alquilar?</label>
            <select
              name="option"
              value={formData.option}
              onChange={handleChange}
              required
              className={styles.form_input}
            >
              <option value="vender">Vender</option>
              <option value="alquilar">Alquilar</option>
            </select>
          </div>

          <div className={styles.form_group}>
            <label>Tipo de Inmueble</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              required
              className={styles.form_input}
            >
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
              <option value="local">Local</option>
              <option value="terreno">Terreno</option>
            </select>
          </div>

          <div className={styles.form_group}>
            <label>Comentario</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              className={styles.form_input}
            />
          </div>

          <button type="submit" className={styles.form_button}>
            Enviar
          </button>
        </form>
      </div>
      <img className={styles.edificios} src={edificios} alt="edificios" />
    </div>
  );
};

export default Vender;
