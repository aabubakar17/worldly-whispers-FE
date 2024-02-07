import React from "react";
import { Header, Hero, SearchManager, CategoriesManager } from "./index.js";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SearchManager />
      <CategoriesManager />
    </div>
  );
};

export default Homepage;
