import React from "react";

import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Tecnologias from "./components/tecnologias/Tecnologias";
import Trabajamos from "./components/trabajamos/Trabajamos";
import Porque from "./components/porque/Porque";
import Services from "./components/services/Services";
import Seo from "./components/seo/Seo";
import Benefits from "./components/beneficios/Benefits";
import Price from "./components/price/Price";
import Portafolio from "./components/portafolio/Portafolio";
import Contact from "./components/contacto/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Tecnologias />
      <Trabajamos />
      <Porque />
      <Services />
      <Seo />
      <Portafolio />
      <Benefits />
      <Price />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
