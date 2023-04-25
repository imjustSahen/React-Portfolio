import React from "react";
import Project from "../Project";

import sherpaGroup from "../../images/SherpaStudios.png";
import beerNBites from "../../images/beer-n-bites.png";
import concertCrawler from "../../images/ConcertCrawler.png";

const projects = [
  {
    id: 1,
    title: "Sherpa Studios",
    image: sherpaGroup,
    description: "MERN Stack Application",
    repo: "https://github.com/imjustSahen/Software-Sherpas",
    deployed: "https://sherpa-studios.herokuapp.com/",
  },
  {
    id: 2,
    title: "Beer'N'Bites",
    image: beerNBites,
    description: "Full Stack Application",
    repo: "https://github.com/imjustSahen/Beer-n-Bites",
    deployed: "https://beer-n-bites.herokuapp.com",
  },
  {
    id: 3,
    title: "Concert Crawler",
    image: concertCrawler,
    description: "Front End Application",
    repo: "https://imjustsahen.github.io/ConcertCrawler/",
    deployed: "https://imjustsahen.github.io/ConcertCrawler/",
  },
];

const Portfolio = () => {
  return (
    <section className="container-fluid p-4 row g-0 text-light">
      <h1 className="text-center display-6 p-4 text-decoration-underline">
        Portfolio
      </h1>
      <Project projects={projects} />
    </section>
  );
};

export default Portfolio;
