import React from "react";
import {
  Header,
  Hero,
  SearchManager,
  CategoriesManager,
  HomepageNavBar,
  NavBar,
} from "./index.js";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <div className="section-1">
        <HomepageNavBar />
        <Header />
        <SearchManager />
        <Hero />
      </div>

      <CategoriesManager />
    </div>
  );
};

export default Homepage;
