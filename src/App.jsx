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
    <div className="app-container">
      <NavBar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
          <Route path="/categories" element={<CategoriesManager />} />
          <Route path="/articles" element={<SearchManager />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
