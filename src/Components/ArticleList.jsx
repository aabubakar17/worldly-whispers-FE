import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles, children }) => {
  return (
    <div className="article-grid">
      {children ? (
        articles[0] !== undefined ? (
          articles.map((article) => (
            <ArticleCard
              key={article.article_id}
              articleImg={article.article_img_url}
              article_title={article.title}
              author={article.author}
              date={article.created_at}
              article={article}
            />
          ))
        ) : (
          <p>Sorry, No Content Found</p>
        )
      ) : articles[0] !== undefined ? (
        articles
          .slice(0, 4)
          .map((article) => (
            <ArticleCard
              key={article.article_id}
              articleImg={article.article_img_url}
              article_title={article.title}
              author={article.author}
              date={article.created_at}
              article={article}
            />
          ))
      ) : (
        <p>Sorry, No Content Found</p>
      )}
    </div>
  );
};

export default ArticleList;
