import React from "react";
import "./portafolio.css";

const Portafolio = () => {
  return (
    <>
      <div className="porta" id="portafolio">
        <p className="porta-t">Mi Portafolio</p>
        <p className="porta-s">Últimos trabajos creativos</p>
      </div>
      <div className="portafolio">
        <div className="portafolio-img">
          <div className="hover">
            <div className="z-index">
              <h1>Portafolio de Imagenes</h1>
              <a href="https://abraham-portfolio.netlify.app/" target="_blank">
                <button>Website</button>
              </a>
            </div>
          </div>
          <img src="/images/portafolio/portafolio.jpg" alt="portafolio" />
        </div>
        <div className="portafolio-img">
          <div className="hover">
            <div className="z-index">
              <h1>App de Gastos</h1>
              <a href="https://compras-app.netlify.app/" target="_blank">
                <button>Website</button>
              </a>
            </div>
          </div>
          <img src="/images/portafolio/todolist.jpg" alt="portafolio" />
        </div>
      </div>
    </>
  );
};

export default Portafolio;
