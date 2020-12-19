import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-div">
        <p className="letter-b">
          A<span className="letter-r">braham Jaimes</span>
        </p>
        <div className="footer-menu">
          <a href="#home">Home</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#about">About</a>
          <a href="#precios">Precios</a>
          <a href="#tech">Tecnologias</a>
          <a href="#contact">Contacto</a>
        </div>
        <p className="copyright">
          Copyright© Abraham Jaimes 2021. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
