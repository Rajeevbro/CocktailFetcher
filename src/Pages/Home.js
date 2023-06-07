import React from "react";

import Hero from "../Components/Hero.js";
import Searchbox from "../Components/Searchbox.js";

const Home = () => {
  return (
    <>
      <main>
        <div>
          <Searchbox />
        </div>
        <div className="cards-container">
          <Hero />
        </div>
      </main>
    </>
  );
};

export default Home;
