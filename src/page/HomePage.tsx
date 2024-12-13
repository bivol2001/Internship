import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/HomePageCards";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="homepage-board">
        <div className="homepage-container-board-card">
            <Cards/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
