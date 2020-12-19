import React from "react";
import "./tecnologias.css";

const Tecnologias = () => {
  return (
    <div className="tecnologias" id="tech">
      <div className="tec-title">
        <p>Familiarizado con Tecnologías como</p>
      </div>
      <div className="tec-grid">
        <img src="/images/technology/html.svg" alt="technology" />
        <img src="/images/technology/css.svg" alt="technology" />
        <img src="/images/technology/js.svg" alt="technology" />
        <img src="/images/technology/react.svg" alt="technology" />
        <img src="/images/technology/node.svg" alt="technology" />
        <img src="/images/technology/sql.svg" alt="technology" />
      </div>
    </div>
  );
};

export default Tecnologias;
