import React from "react";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a 
            href="index.html"
            className="logo d-flex align-items-center me-auto nav-link"
          >
            <img src={logo} alt="logo-img" />
            <h1 className="sitename">OnePage</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li className="nav-item">
                <a href="#hero" className="active nav-link">
                  Home
                  <br />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Team</a>
              </li>
              <li className="dropdown">
                <a className="nav-link" href="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </a>
                <ul>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a className="nav-link" href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown" />
                    </a>
                    <ul>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Deep Dropdown 1</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Deep Dropdown 2</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Deep Dropdown 3</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Deep Dropdown 4</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Dropdown 2</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Dropdown 3</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          <a className="btn-getstarted nav-link" href="#about">
            Get Started
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
