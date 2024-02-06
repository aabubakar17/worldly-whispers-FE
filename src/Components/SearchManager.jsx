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
  const [isLoading, setIsLoading] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  function handleFormSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    getArticles(searchTerm).then((articles) => {
      console.log(articles);
      setArticles(articles);
      setIsLoading(false);
    });
  }

  if (isLoading) return <Loading />;
  return (
    <>
      <div className="search-manager">
        <Form className="form-inline" onSubmit={handleFormSubmit}>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button className="search-btn" type="Submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      {articles.length > 0 ? <ArticleList articles={articles} /> : null}
    </>
  );
};

export default SearchManager;
