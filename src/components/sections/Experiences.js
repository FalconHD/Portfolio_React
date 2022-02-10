import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Acamedic Degree",
    years: "2018 - 2019",
    content:
      "ISTA NTIC || Safi  Diplôme technicien spécialisé de Développement multimédia",
  },
  {
    id: 2,
    title: "Bachelor’s Degree",
    years: "2020 - 2022",
    content:
      "Lycée Mouatamid bnou abbad || SAFI  Baccalauréat science de la vie et de terre.",
  },
  {
    id: 3,
    title: "Development Skills",
    years: "2020 - 2022",
    content:
      "Youcode (OCP / SIMPLON) || SAFI  Formation en développement web et mobile.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Front-End Developer",
    years: "2019 - Present",
    content:
      "Réalisation d’une plateforme des test ( Quizy ) Technologies utilisées : HTML5, CSS3, Bootstrap, Laravel Réalisation d’une Maquette avec Figma",
  },
  {
    id: 2,
    title: "Front-End Developer",
    years: "2017 - 2013",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
  {
    id: 3,
    title: "Back-End Developer",
    years: "2013 - 2009",
    content:
      "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
