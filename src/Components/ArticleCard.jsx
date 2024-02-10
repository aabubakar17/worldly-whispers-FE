import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import dayjs from "dayjs/esm/index.js";
import relativeTime from "dayjs/plugin/relativeTime";
import { Container } from "react-bootstrap";

const ArticleCard = ({
  index,
  articleImg,
  article_title,
  author,
  article,
  date,
  isInHero,
}) => {
  dayjs.extend(relativeTime);

  return (
    <>
      {isInHero ? (
        <Container fluid>
          <Nav variant="underline" className="justify-content-center">
            <Nav.Item>
              <Nav.Link as={Link} to={`/article/${article.article_id}`}>
                <Card
                  style={{ border: "none" }}
                  className={
                    index === 0
                      ? "trending-card-container"
                      : "article-card-container"
                  }
                >
                  <Card.Img
                    className="article-img"
                    variant="top"
                    src={articleImg}
                    alt={`picture of ${article_title}`}
                  />
                  <Card.Body>
                    <Card.Title className="article-title">
                      {article_title}
                    </Card.Title>
                    <Card.Text>Author: {author}</Card.Text>
                    <Card.Text>
                      {dayjs(date.split("T")).fromNow(true)} ago
                    </Card.Text>
                  </Card.Body>
                </Card>{" "}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      ) : (
        <Container fluid>
          <Nav variant="underline" className="justify-content-center">
            <Nav.Item>
              <Nav.Link as={Link} to={`/article/${article.article_id}`}>
                <Card
                  style={{ border: "none" }}
                  className="category-card-container"
                >
                  <Card.Img
                    className="cat-article-img"
                    variant="top"
                    src={articleImg}
                    alt={`picture of ${article_title}`}
                  />
                  <Card.Body>
                    <Card.Title className="article-title">
                      {article_title}
                    </Card.Title>
                    <Card.Text>Author: {author}</Card.Text>
                    <Card.Text>
                      {dayjs(date.split("T")).fromNow(true)} ago
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      )}
    </>
  );
};

export default ArticleCard;
