import React from "react";
import Navigation from "../components/navigation";
import Card from "../components/Card";
import ExploreLeftBar from "../components/ExploreLeftBar";

const ExplorePage = () => {
  return (
    <>
      <Navigation />
      <div className="explorePage">
        <div className="leftBar">
          <ExploreLeftBar />
        </div>
        <div id="cardContainer" className="cardCarousel">
          <Card />
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
