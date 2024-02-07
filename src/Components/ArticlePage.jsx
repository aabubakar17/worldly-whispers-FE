import React from "react";
import ArticleSection from "./ArticleSection";
import { useEffect, useState } from "react";
import { getArticleByID, getLatestArticles } from "../api";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import CommentManager from "./CommentManager";

const ArticlePage = () => {
  const [currentArticle, setCurrentArticle] = useState(null);
  const { articleId } = useParams();
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

      <CommentManager articleId={articleId} />
    </div>
  );
};

export default ArticlePage;
