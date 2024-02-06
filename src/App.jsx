import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Header,
  NavBar,
  Hero,
  SearchManager,
  CategoriesManager,
  Footer,
} from "./Components/index.js";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Hero />
      <SearchManager />
      <CategoriesManager />
      <Footer />
      <Routes>
        <Route path="/categories" element={<CategoriesManager />} />
        <Route path="/articles" element={<SearchManager />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
