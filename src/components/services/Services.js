import React from "react";
import "./services.css";

const Services = () => {
  let services = [
    {
      img: "/images/services/dev.svg",
      title: "Desarrollo Web",
      subtitle:
        "Todo lo que creamos es compatible con dispositivos móviles, tiene integración con las redes sociales.",
    },
    {
      img: "/images/services/design.svg",
      title: "Diseño Web",
      subtitle:
        "Creamos una hermosa marca que sea exclusivamente tuya en todo el diseño web.",
    },
    {
      img: "/images/services/brand.svg",
      title: "Marca",
      subtitle:
        "Nuestro equipo de expertos siempre está listo para ayudarlo  a crear una imagen de marca adecuada.",
    },
    {
      img: "/images/services/logo.svg",
      title: "Logo",
      subtitle:
        "Creamos el diseño de su logotipo en línea para su negocio o proyecto.",
    },
    {
      img: "/images/services/ux.svg",
      title: "Diseño UX",
      subtitle:
        '"Mejoramos  la facilidad de uso y el placer que brinda la interacción con un producto"',
    },
    {
      img: "/images/services/support.svg",
      title: "Soporte",
      subtitle:
        "Brindamos servicios confiables y ccessible para ayudarlo a establecer rápidamente un sitio web perfecto.",
    },
  ];

  return (
    <div className="services">
      {services.map((elem, index) => {
        return (
          <div className="img" key={index}>
            <div>
              <img src={elem.img} alt="services" />
              <p className="service-t">{elem.title}</p>
              <p className="service-s">{elem.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
