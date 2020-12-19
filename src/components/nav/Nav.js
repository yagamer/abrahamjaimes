import React, { useEffect, useState, useRef } from "react";
import "./nav.css";

const Nav = () => {
  const [hamShow, setHamShow] = useState(false);
  const [btnShow, setBtnShow] = useState(false);
  let handleShow = () => {
    setHamShow(!hamShow);
  };

  const navRef = useRef();

  useEffect(() => {
    //
    let handleBtn = () => {
      let { y } = navRef.current.getBoundingClientRect();

      if (y < -130) {
        setBtnShow(!btnShow);
      } else if (y > -130) {
        setBtnShow(false);
      }
    };
    window.addEventListener("scroll", handleBtn);
    return () => {
      window.removeEventListener("scroll", handleBtn);
    };
    //
  }, []);

  return (
    <>
      <nav ref={navRef} id="nav">
        <div className={`up ${btnShow && "up-show"}`}>
          <a href="#nav">
            <img src="/images/up.svg" alt="up" />
          </a>
        </div>
        <div className="logo">
          <p>
            <span className="letter-a">A</span>braham Jaimes
          </p>
        </div>
        <div className="menu">
          <div className={`show-ham ${hamShow && "ham-show"}`}>
            <div>Home</div>
            <div>Portafolio</div>
            <div>About</div>
            <div>Precios</div>
            <div>Tecnologias</div>
            <div>Contacto</div>
          </div>
          <div className="ham">
            <img
              // onClick={handleShow}
              src="https://s.svgbox.net/hero-outline.svg?ic=menu&fill=000"
              width="32"
              height="32"
              alt="cv"
            />
          </div>
          <div className="ham-menu">
            <a href="#home">Home</a>
            <a href="#portafolio">Portafolio</a>
            <a href="#about">About</a>
            <a href="#precios">Precios</a>
            <a href="#tech">Tecnologías</a>
            <a href="#contacto">Contacto</a>

            <button>CV</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
