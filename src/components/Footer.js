import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center bg-black text-white p-2 p-lg-4 shadow-lg">
      <a
        href="https://github.com/imjustSahen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-2x fa-github fa-lg px-5 text-white"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/sahen-alexander-180625120/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-2x fa-linkedin px-5 text-white"></i>
      </a>
      <a
        href="https://www.instagram.com/imjustSahen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-2x fa-instagram px-5 text-white"></i>
      </a>
    </footer>
  );
};

export default Footer;
