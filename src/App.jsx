import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  NavBar,
  Homepage,
  ArticlePage,
  Header,
  Hero,
  SearchManager,
  CategoriesManager,
  HomepageNavBar,
  ContactUs,
  Footer,
} from "./Components/index.js";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="app-container">
      {location.pathname === "/" ? null : <NavBar />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
          <Route path="/categories" element={<CategoriesManager />} />
          <Route path="/explore" element={<SearchManager />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
