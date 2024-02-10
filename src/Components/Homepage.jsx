import React from "react";
import { Header, Hero, SearchManager, CategoriesManager } from "./index.js";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Header />
      <SearchManager />
      <Hero />

      <CategoriesManager />
    </div>
  );
};

export default Homepage;
