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
        <Card
          style={{ width: "25rem" }}
          className={
            index === 0
              ? "trending-card-container card-container"
              : "article-card-container card-container"
          }
        >
          <Nav variant="underline" className="justify-content-center">
            <Nav.Item>
              <Nav.Link as={Link} to={`/article/${article.article_id}`}>
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
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card>
      ) : (
        <Container fluid>
          <Card className="category-card-container">
            <Nav variant="underline" className="justify-content-center">
              <Nav.Item>
                <Nav.Link as={Link} to={`/article/${article.article_id}`}>
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
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card>
        </Container>
      )}
    </>
  );
};

export default ArticleCard;
