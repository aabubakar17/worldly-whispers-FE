import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import * as dayjs from "dayjs";
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
          className={
            index === 0
              ? "trending-card-container card-container"
              : "article-card-container card-container"
          }
        >
          <Nav className="justify-content-center">
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
                    Date: {dayjs(date.split("T")).fromNow(true)} ago
                  </Card.Text>
                </Card.Body>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card>
      ) : (
        <Container fluid>
          <Card>
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
                      Date: {dayjs(date.split("T")).fromNow(true)} ago
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
