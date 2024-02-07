import React from "react";
import CommentList from "./CommentList";
import { useState, useEffect } from "react";
import { getCommentsByID } from "../api";
import Loading from "./Loading";
const CommentManager = ({ articleId }) => {
  const [commentsRecord, setCommentRecord] = useState([]);

  useEffect(() => {
    getCommentsByID(articleId).then((comments) => {
      setCommentRecord(comments);
    });
  }, [articleId]);

  return (
    <div>
      {commentsRecord ? (
        <CommentList commentsRecord={commentsRecord} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CommentManager;
