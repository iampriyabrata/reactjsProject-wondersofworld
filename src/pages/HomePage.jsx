import React from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <div className="homeSetup">
        <div id="earthpng">
          <img src="/src/images/homeEarth.png" alt="" />
        </div>
        <div id="homeHeroContent">
          <h1>
            Wonders <br /> of <br /> World
          </h1>

          <Link
            type="button"
            id="exploreBtn"
            className="btn btn-outline-light"
            to="/explore"
          >
            Explore
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
