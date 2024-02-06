import React from "react";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
const ArticleCard = ({
  index,
  articleImg,
  article_title,
  author,
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
        <div className="article-card-container">
          <img
            className="article-img"
            src={articleImg}
            alt={`picture of ${article_title}`}
          />
          <h4>{article_title}</h4>
        </div>
      )}
    </>
  );
};

export default ArticleCard;
