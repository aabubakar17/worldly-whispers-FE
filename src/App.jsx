import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  NavBar,
  Homepage,
  ArticlePage,
  Header,
  Hero,
  SearchManager,
  CategoriesManager,
  Footer,
} from "./Components/index.js";
import "./App.css";

function App() {
  const [clickedArticle, setClickedArticle] = useState(null);
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
        <Route path="/categories" element={<CategoriesManager />} />
        <Route path="/articles" element={<SearchManager />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
