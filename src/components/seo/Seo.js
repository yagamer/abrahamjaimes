import React from "react";
import "./seo.css";

const Seo = () => {
  return (
    <div className="seo">
      <div className="seo-content">
        <div>
          <p className="seo-t">
            Nuestros sitios web
            <br /> son totalmente responsivos
            <br /> preparados para SEO
          </p>
          <p className="seo-s">
            Proporcionamos todo lo que su sitio necesita para funcionar
            <br /> con las capacidades más altas en los principales motores de
            búsqueda.
          </p>
        </div>
      </div>
      <div className="seo-image">
        <img src="/images/seo.svg" alt="seo" />
      </div>
    </div>
  );
};

export default Seo;
