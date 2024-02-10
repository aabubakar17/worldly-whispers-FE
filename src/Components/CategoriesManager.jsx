import React from "react";
import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";
import { getLatestArticles, getCategories } from "../api";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import FilterManager from "./FilterManager";

const CategoriesManager = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);
  const [seeAllToggle, setSeeAllToggle] = useState(false);

  useEffect(() => {
    getLatestArticles(currentCategory).then((articles) => {
      setLatestArticles(articles);
    });
    getCategories().then((topics) => {
      setCategoryList(topics);
    });
  }, [currentCategory]);
  return (
    <>
      <div className="categories-manager">
        <Row>
          <Col xs="auto" className="d-flex justify-content-center">
            <h3>Latest News</h3>
          </Col>
          <Col xs="auto">
            <Nav variant="underline">
              <Nav.Item>
                <Nav.Link
                  onClick={() => {
                    setSeeAllToggle(true);
                    setCurrentCategory([]);
                  }}
                >
                  See All
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xs="auto">
            <FilterManager
              currentCategory={currentCategory}
              setArticleList={setLatestArticles}
            />
          </Col>
        </Row>

        <Row>
          {categoryList.map((category, index) => {
            return (
              <Col xs="auto" key={index}>
                <Nav variant="underline">
                  <Nav.Link
                    variant="light"
                    value={currentCategory}
                    onClick={() => setCurrentCategory(category.slug)}
                    active={currentCategory === category.slug}
                  >
                    {category.slug}
                  </Nav.Link>
                </Nav>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="categories-article-container">
        <ArticleList articles={latestArticles}>{seeAllToggle}</ArticleList>
      </div>
    </>
  );
};

export default CategoriesManager;
