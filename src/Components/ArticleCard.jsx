import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
        <div
          className={
            index === 0 ? "trending-card-container" : "article-card-container"
          }
        >
          <img
            className="article-img"
            src={articleImg}
            alt={`picture of ${article_title}`}
          />
          <h4 className="article-title">{article_title}</h4>
          <p>Author: {author}</p>
          <p>Date: {dayjs(date.split("T")).fromNow(true)} ago</p>
        </div>
      ) : (
        <Container fluid>
          <div className="article-card-container">
            <img
              className="article-img"
              src={articleImg}
              alt={`picture of ${article_title}`}
            />
            <Nav variant="underline" className="justify-content-center">
              <Nav.Item>
                <Nav.Link as={Link} to={`/article/${article.article_id}`}>
                  <h4 className="article-title">{article_title}</h4>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <p>Author: {author}</p>
            <p>Date: {dayjs(date.split("T")).fromNow(true)} ago</p>
          </div>{" "}
        </Container>
      )}
    </>
  );
};

export default ArticleCard;
