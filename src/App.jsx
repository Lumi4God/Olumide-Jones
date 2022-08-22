import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Music from "./components/music/music";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

//React-Reveal
import Flip from "react-reveal/Flip";


const App = () => {

 
  return (
    <>
      <Flip>
        {" "}
        {/*calling React-Reveal*/}
        <Header />
      </Flip>
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Music />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
