import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div>
          <div className="div">
            <div className="header-shape">
              <div className="header-icon">
                <img
                  src="https://s.svgbox.net/hero-outline.svg?ic=mail&fill=fff"
                  width="22"
                  height="22"
                  alt="mail"
                />
              </div>
              <div className="header-email">
                <p>tupaginaenlinea@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <p className="header-title">Diseño Web</p>
            <p className="header-sub">Planeamos💎Diseñamos💎Construimos</p>
            <p className="slogan">
              Construimos Tegnologías para Empresas , Organizaciones y Agencias
              <br />
              de Todo el Mundo.
            </p>
          </div>
        </div>
      </div>
      <div className="header-city">
        <img src="/images/city.png" alt="city" />
      </div>
      <div className="header-typing">
        <img src="/images/typing.svg" alt="typing" />
      </div>
      <div className="header-decoration">
        <img src="/images/decoration.png" alt="decoration" />
      </div>
    </div>
  );
};

export default Header;
