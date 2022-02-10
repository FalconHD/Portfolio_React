import React from "react";
import Typed from "react-typed";
import bg from "../../images/background.jpg";
import { Link } from "react-scroll";

function Herosection(props) {
  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
      style={{ backgroundColor: "white", backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
    >
      <div className="container">
        <div className="intro">
          <div className="mb-4 " style={{ overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }} >
            <img style={{ width: "30%", borderRadius: "50%", }} src="https://cdn.discordapp.com/attachments/940184471783751720/940910624412667954/IMG_2217g.png" alt="Othman" className="" />
          </div>

          <h1 className="mb-2 mt-0">Othmane Rhazlani</h1>
          <p>
            I'm a{" "}
            <Typed
              strings={[
                "UI/UX designer ",
                "Front-End developer",
                "Graphic Designer lover",
              ]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Hire me
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
