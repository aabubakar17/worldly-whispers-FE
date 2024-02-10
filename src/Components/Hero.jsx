import React from "react";
import { useState, useEffect } from "react";
import { getTrendingArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { Row } from "react-bootstrap";
const Hero = () => {
  const [trendingList, setTrendingList] = useState([]);
  const [isInHero, setIsInHero] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getTrendingArticles().then(({ articles }) => {
      setTrendingList(articles);
      setIsLoading(false);
      setIsInHero(true);
    });
  }, []);
  if (isLoading) return <Loading />;
  return (
    <section className="trending-container">
      <h2>Trending</h2>

      <div className="trending-grid-container">
        <div className="trending-grid">
          {trendingList.slice(0, 4).map((trendArticle, index) => {
            return (
              <ArticleCard
                key={trendArticle.article_id}
                articleImg={trendArticle.article_img_url}
                article_title={trendArticle.title}
                author={trendArticle.author}
                date={trendArticle.created_at}
                article={trendArticle}
                isInHero={isInHero}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
