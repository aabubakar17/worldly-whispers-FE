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
  ContactUs,
  Footer,
} from "./Components/index.js";
import "./App.css";

function App() {
  const [clickedArticle, setClickedArticle] = useState(null);
  return (
    <div className="app-container">
      <div className="main-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
          <Route path="/categories" element={<CategoriesManager />} />
          <Route path="/articles" element={<SearchManager />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>{" "}
    </div>
  );
}

export default App;
