import React from "react";
import CommentList from "./CommentList";
import { useState, useEffect } from "react";
import { getCommentsByID } from "../api";
import Loading from "./Loading";
import PostComment from "./PostComment";
import Col from "react-bootstrap/Col";
const CommentManager = ({ articleId }) => {
  const [commentsRecord, setCommentRecord] = useState(null);

  useEffect(() => {
    getCommentsByID(articleId).then((comments) => {
      setCommentRecord(comments);
    });
  }, [articleId]);

  return (
    <div>
      <Col xs={2}>
        <h2>Comments:</h2>
      </Col>
      <PostComment
        articleId={articleId}
        commentsRecord={commentsRecord}
        setCommentRecord={setCommentRecord}
      />
      {commentsRecord ? (
        <CommentList
          setCommentRecord={setCommentRecord}
          commentsRecord={commentsRecord}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CommentManager;
