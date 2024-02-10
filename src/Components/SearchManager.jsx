import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleList from "./ArticleList";
import Loading from "./Loading";
import { getArticles } from "../api";

const SearchManager = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setSubmitted(true);
    getArticles(searchTerm)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message || "An error occurred while fetching articles.");
        setIsLoading(false);
      });
  }

  return (
    <>
      <section className="search-manager-container">
        <div className="search-manager">
          <Form className="form-inline" onSubmit={handleFormSubmit}>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button className="search-btn" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        {isLoading && <Loading />}
        {error && <div>Error: {error}</div>}
        {submitted && !isLoading && articles.length === 0 && (
          <div>No articles found.</div>
        )}
        {submitted && articles.length > 0 && !isLoading && (
          <ArticleList articles={articles} />
        )}
      </section>
    </>
  );
};

export default SearchManager;
