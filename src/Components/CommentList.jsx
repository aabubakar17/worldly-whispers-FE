import React, { useEffect } from "react";
import CommentCard from "./CommentCard";
import Col from "react-bootstrap/Col";
import { useState } from "react";
const CommentList = ({ commentsRecord }) => {
  const [isComments, setIsComment] = useState(true);

  useEffect(() => {
    if (commentsRecord.length === 0 && !null) {
      setIsComment(false);
    }
  }, [commentsRecord]);

  return (
    <div>
      {isComments ? (
        commentsRecord.map((comment, index) => {
          return <CommentCard key={index} comment={comment} />;
        })
      ) : (
        <p>No comments yet...</p>
      )}
    </div>
  );
};

export default CommentList;
