import React from "react";
import ArticleSection from "./ArticleSection";
import { useEffect, useState } from "react";
import { getArticleByID, getLatestArticles } from "../api";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const [currentArticle, setCurrentArticle] = useState(null);
  const { articleId } = useParams();
  console.log(articleId);
  useEffect(() => {
    {
      getArticleByID(articleId).then((article) => {
        setCurrentArticle(article);
      });
    }
  }, []);
  return (
    <div>
      {currentArticle ? (
        <ArticleSection currentArticle={currentArticle} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ArticlePage;
