import React from "react";
import "../App.css";

const Project = (props) => {
  return (
    <section className="container">
      {props.projects.map((project) => (
        <div className="cards">
          <img
            src={project.image}
            alt="project-img"
            style={{ height: "300px", width: "500px" }}
            className="image"
          />

          <div className="card-header">
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.title}</h3>
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-3x fa-github fa-lg mx-4 text-white"></i>
            </a>
            <div className="p-2">{project.description}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;
