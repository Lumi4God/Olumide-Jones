import React, { useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";
import Mine from "../../assets/mine.PNG";
import Mouse from "../../assets/mouse.png";
import LogoClock from "../../assets/Nav/logoClock.jsx";

import { RiSingleQuotesL } from "react-icons/ri";
import { RiSingleQuotesR } from "react-icons/ri";
//aos
import Aos from "aos";
import "aos/dist/aos.css";
/* import {BsMouse} from 'react-icons/bs' */

/* import Spline  from "@splinetool/react-spline" */

const Header = () => {
  //aos
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <header id="home">
      {<LogoClock />}

      {/* <Spline scene="https://draft.spline.design/1SIsKQFH-TVtEI-0/scene.spline" className="spline" /> */}
      {/* <Spline scene="https://prod.spline.design/jJLlopKqICs-AcgG/scene.splinecode" className="spline"/> */}

      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Olumide Jones</h1>
        <h5 className="text-light">A</h5>
        {/* <h5 className="text-light">Fullstack Developer</h5> old title under my name*/}

        <div className="typingContainer">
          <div className="text">
            <ul>
              <li>
                <span className="span1">
                  <RiSingleQuotesL className="rIcon" /> Fullstack Developer{" "}
                  <RiSingleQuotesR className="rIcon" />
                </span>
              </li>
              <li>
                <span className="span2">
                  <RiSingleQuotesL className="rIcon" /> Designer{" "}
                  <RiSingleQuotesR className="rIcon" />
                </span>
              </li>
              <li>
                <span className="span3">
                  <RiSingleQuotesL className="rIcon" /> Musician{" "}
                  <RiSingleQuotesR className="rIcon" />
                </span>
              </li>
              <li>
                <span className="span4">
                  <RiSingleQuotesL className="rIcon" /> Content creator{" "}
                  <RiSingleQuotesR className="rIcon" />
                </span>
              </li>
            </ul>
          </div>
        </div>

        <CTA />
        <HeaderSocial />

        {/*me*/}
        <div className="me">
          <img src={Mine} alt="me" data-aos="flip-right" />
        </div>

        {/*bubbles*/}
        <div className="bubbles">
          <span className="language">html</span>
          <span className="language">css</span>
          <span className="language">javascript</span>
          <span className="language">react.js</span>
          <span className="language">node.js</span>
          <span className="language">express.js</span>
          <span className="language">mongodb</span>
        </div>

        {/*mouse*/}
        <a href="#contact" className="scroll__down">
          Scroll Down{" "}
        </a>
        <a href="#contact" className="scroll__down_anchor">
          <img className="mouse" src={Mouse} alt="mouse" />
        </a>
      </div>
    </header>
  );
};

export default Header;
