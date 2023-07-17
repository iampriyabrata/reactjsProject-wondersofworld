import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div
        id="navbar"
        className="container-fluid  bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="row">
          <div className="col-9 d-flex justify-content-start align-items-center">
            <Link className="navbar-brand fs-2 fw-bold" to="/home">
              Worlds-Wonders
            </Link>
          </div>
          <div className="col-3">
            <ul className="navbar-nav d-flex flex-row justify-content-between align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <ul className="socials nav-item">
                <li className="github">
                  <a href="https://github.com/iampriyabrata" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li className="linkedin">
                  <a
                    href="https://www.linkedin.com/in/priyabrata-munda/"
                    target="_blank"
                  >
                    <i className="bi bi-linkedin"> </i>
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
