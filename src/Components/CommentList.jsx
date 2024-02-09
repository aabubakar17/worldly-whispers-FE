import React, { useEffect } from "react";
import CommentCard from "./CommentCard";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { deleteCommentByCommentId } from "../api";
const CommentList = ({ commentsRecord, setCommentRecord }) => {
  const [isComments, setIsComment] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (commentsRecord.length === 0 && !null) {
      setIsComment(false);
    }
  }, [commentsRecord]);

  const handleDelete = (commentId) => {
    const updatedComments = commentsRecord.filter(
      (comment) => comment.comment_id !== commentId
    );
    setCommentRecord(updatedComments);
    deleteCommentByCommentId(commentId).catch(() => {
      setCommentRecord(commentsRecord);
      setShowModal(true);
    });
  };

  return (
    <div>
      {isComments ? (
        commentsRecord.map((comment, index) => {
          return (
            <CommentCard
              key={index}
              comment={comment}
              onDelete={handleDelete}
              commentID={comment.comment_id}
            />
          );
        })
      ) : (
        <p>No comments yet...</p>
      )}
    </div>
  );
};

export default CommentList;
