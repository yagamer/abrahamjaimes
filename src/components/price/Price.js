import React from "react";
// import StripeCheckout from "react-stripe-checkout";

import "./price.css";

const Price = () => {
  let handleToken = (token, addresses) => {
    console.log({ token, addresses });
  };

  return (
    <div className="price">
      <div className="price-basic">
        <div className="price-header">
          <p className="basico">Basico</p>
          <img src="/images/basico.svg" alt="basico" />
          <p className="price-p">$4,500mx</p>
        </div>
        <div className="price-body">
          <div>
            <p>1 año de Hospedaje</p>
            <p>Dominio Incluido</p>
            <p>Certificado SSL</p>
            <p>1 Formulario de Contacto</p>
            <p>Diseño de Página</p>
            <p>Diseño Responsivo</p>
            <p>Redes Sociales</p>
            <p>Links de Páginas 4</p>
            <p>SEO</p>
            {/* <StripeCheckout
              label="Comprar Servicio"
              name={"Basico"}
              amount={450000}
              token={handleToken}
              description="compra segura"
              panelLabel="Pago"
              image="/images/basico.svg"
              stripeKey="pk_test_51HzTnJEWkCrZKXxEEQ1KVrODwtaAF07RBuuCQRBBoZx9cI8OF7bYmctmOaKI0lNvvBrPwYK0j4dDaYkamv0Pm0eT00pDRJLvmC"
            /> */}
          </div>
        </div>
      </div>
      <div className="price-basico">
        <div className="price-header">
          <p className="basico">Plus</p>
          <img src="/images/plus.svg" alt="plus" />
          <p className="price-p">$6,500mx</p>
        </div>
        <div className="price-body">
          <div>
            <p>1 año de Hospedaje</p>
            <p>Dominio Incluido</p>
            <p>Certificado SSL</p>
            <p>1 Formulario de Contacto</p>
            <p>Diseño de Página</p>
            <p>Diseño Responsivo</p>
            <p>Redes Sociales</p>
            <p>Links de Páginas 6</p>
            <p>SEO</p>
            <p>Imágenes de Contenido</p>
            <p>Edición de Imágenes</p>
          </div>
        </div>
      </div>
      <div className="price-basic">
        <div className="price-header">
          <p className="basico">Profesional</p>
          <img src="/images/pro.svg" alt="pro" />
          <p className="price-p">$10,500mx</p>
        </div>
        <div className="price-body">
          <div>
            <p>1 año de Hospedaje</p>
            <p>Dominio Incluido</p>
            <p>Certificado SSL</p>
            <p>1 Formulario de Contacto</p>
            <p>Diseño de Página</p>
            <p>Diseño Responsivo</p>
            <p>Redes Sociales</p>
            <p>Links de Páginas 8</p>
            <p>SEO</p>
            <p>Imágenes de Contenido</p>
            <p>Edición de Imágenes</p>
            <p>Google Maps</p>
            <p>Sistema de Chat</p>
            <p>Soporte via AnyDesk</p>
            <p>Blog</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
