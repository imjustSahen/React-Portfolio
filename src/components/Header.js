import React from "react";
import Nav from "./Nav";

const Header = (props) => {
  const { currentPage, handlePageChange } = props;

  return (
    <header className="custom-nav-container">
      <a href="#about" onClick={() => handlePageChange("About")}>
        <h1>imjustSahen</h1>
      </a>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
};

export default Header;
