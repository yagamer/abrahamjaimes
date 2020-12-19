import React from "react";
import "./trabajo.css";

const Trabajamos = () => {
  return (
    <>
      <div className="trabajo">
        <div className="trabajo-image">
          <img src="/images/development.svg" alt="development" />
        </div>
        <div className="trabajo-title">
          <div className="trabajo-c">
            <div className="center">
              <p className="trabajo-t">Como Trabajamos ?</p>
              <p className="trabajo-s">
                Primero Planemos Luego Diseñamos y Despues Construimos
              </p>
            </div>
          </div>
          <div className="planeamos">
            <img src="/images/planning.svg" alt="planning" />
            <div>
              <p className="planeamos-t">Planeamos</p>
              <p className="planeamos-s">
                Primero Planeamos Todos los Elementos
                <br /> Nesesarios para tu Projecto.
              </p>
            </div>
          </div>
          <div className="planeamos">
            <img src="/images/design.svg" alt="design" />
            <div>
              <p className="disenamos-t">Diseñamos</p>
              <p className="planeamos-s">
                Despues de eso Nuestros Diseñadores
                <br /> Profesionales Crearan un Diseño adecuado
                <br /> para tu Projecto.
              </p>
            </div>
          </div>
          <div className="planeamos">
            <img src="/images/build.svg" alt="build" />
            <div>
              <p className="construimos-t">Construimos</p>
              <p className="planeamos-s">
                Despues Programamos ( Codificamos )<br /> tus Ideas para darle
                vida a tu Proyecto ( Negocio ).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trabajamos;
