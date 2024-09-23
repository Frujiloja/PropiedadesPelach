import styles from "./Contacto.module.css";
import React, { useState } from "react";
import edificios from "../assets/vecteezy_city-background-illustration-black_22227434.png";
import logo from "../assets/only logo.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from 'emailjs-com';


const Contacto = () => {
  const position = [-34.572766, -58.421053]; // Coordenadas de Buenos Aires (ejemplo)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
    emailjs.send('service_fcnnvtf', 'template_bwaptb9', formData, '1sBpeKaGLYovogvqY')
    .then((result) => {
      alert('Correo enviado con éxito!');
      console.log(result.text);
      // Limpia el formulario
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      alert('Hubo un problema al enviar el correo. Intenta de nuevo.');
      console.log(error.text);
    });
    console.log("Formulario enviado", formData);
  };

  return (
    <div className={styles.contacto_container}>
      <h1>Contactanos</h1>
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
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "430px", width: "50%", borderRadius: "10px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Av. Gral. Las Heras 3780</Popup>
          </Marker>
        </MapContainer>
      </div>
      <img className={styles.edificios} src={edificios} alt="edificios" />
    </div>
  );
};

export default Contacto;
