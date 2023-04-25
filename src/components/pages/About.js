import React from "react";
import profileImg from "../../images/FPW-HEADSHOT-Sahen_Garcia - Copy.jpg";

const About = ({ currentPage, handlePageChange }) => {
  return (
    <section className="100vh">
      <div
        className="bg-image jumbotron d-flex flex-wrap justify-content-center align-items-center "
      >
        <div className="d-flex flex-row align-items-center flex-wrap text-white ">
          <div className="mx-5 ">
            <div className="display-2 p-2">Sahen Alexander</div>
            <div className="display-6 p-2">
              Full Stack Engineer
            </div>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-link active bg-dark"
                  : "nav-link"
              }
            >
              <button className="btn  text-white rounded-pill py-2 px-4 mt-4 border-light bg-dark ">
                My Portfolio
              </button>
            </a>
          </div>
          <img
            alt="Sahen Alexander"
            src={profileImg}
            style={{ width: "230px", border: "1px", overflow: "hidden" }}
            className="border border-dark shadow-lg"
          ></img>
        </div>
      </div>
      <div className="d-flex text-light p-4 align-items-center">
        <div className="text-center">
          <h2 className="px-5 pt-4 display-6">A Little About Me</h2>
          <p className="lead p-4">
          Full Stack Dev that's been helping small businesses grow in their sales and operations! Building beautiful websites that are easy to manage and scale with your business as it grows. I've worked with a wide selection of businesses in all kinds of industries giving me a unique perspective and creativity when starting a new project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
