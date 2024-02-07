import React from "react";
import CommentCard from "./CommentCard";
import Col from "react-bootstrap/Col";
const CommentList = ({ commentsRecord }) => {
  return (
    <div>
      <Col xs={2}>
        <h2>Comments:</h2>
      </Col>

      {commentsRecord.map((comment, index) => {
        return <CommentCard key={index} comment={comment} />;
      })}
    </div>
  );
};

export default CommentList;
