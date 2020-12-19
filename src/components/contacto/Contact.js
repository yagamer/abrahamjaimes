import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./contact.css";

const Contact = () => {
  //

  const [vacio, setVacio] = useState(false);
  const [send, setSend] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  let sendEmail = (e) => {
    e.preventDefault();
    if (
      form.name.trim() &&
      form.email.trim() &&
      form.phone.trim() &&
      form.message.trim()
    ) {
      setSend(true);
      emailjs
        .sendForm(
          "gmail",
          "template_wa7t4gv",
          e.target,
          "user_PvRNWqSARBOwski0pGncH"
        )
        .then((result) => {
          setSend(false);
          setEnviado(true);
          if (result.status === 200) {
            setTimeout(() => {
              setEnviado(false);
            }, 2500);
          }
          console.log(result);
        });

      setForm({ name: "", email: "", phone: "", message: "" });
      console.log("llenos");
    } else {
      setVacio(true);
      setTimeout(() => {
        setVacio(false);
      }, 1500);
      console.log("vacios");
    }
    e.target.reset();
  };

  return (
    <>
      <div id="about">
        <p className="contact-t">
          SI PUEDE VISUALIZARLO, ENTONCES PODEMOS DISEÑARLO.
          <br /> ¡CUÉNTANOS MÁS SOBRE TU PROYECTO!
        </p>
      </div>
      <div className="contact" id="contacto">
        <div className="contact-grid">
          <div className="contact-form">
            <div className="contact-title">
              <p>CONTACTO</p>
            </div>
            <form onSubmit={sendEmail}>
              <div>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  type="text"
                  placeholder="Nombre"
                  name="name"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  value={form.email}
                  type="email"
                  placeholder="E-mail"
                  name="email"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  value={form.phone}
                  type="number"
                  placeholder="Telefono"
                  name="phone"
                />
              </div>
              <div>
                <textarea
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  value={form.message}
                  placeholder="Mensaje"
                  name="message"
                />
              </div>
              <div className="btn-state">
                <button type="submit">Enviar</button>
                <div className="state">
                  <p>{vacio && "Campos Vacíos..."}</p>
                  <p>{send && "Enviando Datos..."}</p>
                  <p>{enviado && "Datos Enviados !!"}</p>
                </div>
              </div>
            </form>
          </div>
          <div className="contact-address">
            <div className="contact-add">
              <p>INFORMACION</p>
            </div>
            <div className="contact-info">
              <p></p>
              <p>tupaginaenlinea@gmail.com</p>
              <p>Mexico D.F</p>
              <a
                href="https://www.instagram.com/abraham.665/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/portafolio/insta.svg" alt="insta" />
              </a>
              <a
                href="https://twitter.com/tupaginaenlinea"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/portafolio/twitter.svg" alt="twitter" />
              </a>
              <div className="sobre-mi">
                <p>
                  Ingrese sus datos a continuación para que nuestro equipo de
                  soluciones cree un presupuesto personalizado para sus
                  necesidades individuales. Pasaremos su pregunta a uno de
                  nuestros agentes, quien le responderá personalmente lo antes
                  posible.
                </p>
                {/* <p>
                  Agencia de diseño web profesional que crea sitios web para
                  clientes corporativos e individuales. También diseñamos y
                  desarrollamos marcas y aplicaciones web con experiencias e
                  interacciones de usuario intuitivas que funcionan a la
                  perfección en todos los dispositivos. Si está buscando un
                  sitio web único para su empresa o negocio estaremos encantados
                  de diseñarlo para usted.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
