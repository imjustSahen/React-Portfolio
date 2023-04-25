import React from "react";

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <nav className="custom-nav">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          // className={
          //   currentPage === "Portfolio" ? "active" : ""
          // }
        >
          Portfolio
        </a>
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          // className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          // className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
    </nav>
  );
};

export default Nav;
