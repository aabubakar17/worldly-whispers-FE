import React from "react";

const ArticleHeader = ({ title }) => {
  return (
    <div>
      {" "}
      <h1 className="article-header">{title}</h1>
    </div>
  );
};

export default ArticleHeader;
