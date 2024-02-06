import React from "react";
import ArticleHeader from "./ArticleHeader";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
const ArticleSection = ({ currentArticle }) => {
  console.log(currentArticle);
  return (
    <div>
      <Container fluid>
        <ArticleHeader title={currentArticle.title} />
        <Row>
          <Col xs={6} md={4}>
            <Image src={currentArticle.article_img_url} rounded />
          </Col>
        </Row>
        <Row>
          <p align="left">{currentArticle.body}</p>
        </Row>
      </Container>
    </div>
  );
};

export default ArticleSection;
