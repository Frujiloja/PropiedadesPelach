import styles from "./Contacto.module.css";
import React, { useState } from "react";
import edificios from "../assets/vecteezy_city-background-illustration-black_22227434.png";
import logo from "../assets/only logo.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from "emailjs-com";

const Contacto = () => {
  const position = [-34.572766, -58.421053]; // Coordenadas de Buenos Aires (ejemplo)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const destinatario = "horaciopelach@gmail.com";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      ...formData,
      to_email: destinatario,
    };

    emailjs
      .send(
        "service_fcnnvtf",
        "template_bwaptb9",
        emailData,
        "1sBpeKaGLYovogvqY"
      )
      .then(
        (result) => {
          alert("Correo enviado con éxito!");
          console.log(result.text);
          // Limpia el formulario
          setFormData({ name: '', phone: '', email: '', comment: '' });
        },
        (error) => {
          alert("Hubo un problema al enviar el correo. Intenta de nuevo.");
          console.log(error.text);
        }
      );
    console.log("Formulario enviado", emailData);
  };

  return (
    <div className={styles.contacto_container}>
      <h1 className={styles.titulo}>Contactanos</h1>
      <br />
      <img src={logo} alt="logo" className={styles.logo} />
      <h1 className={styles.h1}>
        Pelach Propiedades <br />
        Las Heras 3780 - C.A.B.A. <br />
        Tel. 4801-2877 / 11-5228-0786 <br />
        info@pelachpropiedades.com.ar
      </h1>
      <div className={styles.div_container}>
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
            <label>Comentarios</label>
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9291.534435932665!2d-58.420864227677704!3d-34.57751272451957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57ebaeac219%3A0xa485a3c2ba14616b!2sAv.%20Gral.%20Las%20Heras%203780%2C%20C1425ATO%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1727286180253!5m2!1ses!2sar"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <img className={styles.edificios} src={edificios} alt="edificios" />
    </div>
  );
};

export default Contacto;
