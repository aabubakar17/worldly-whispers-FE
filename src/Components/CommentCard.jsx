import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
const CommentCard = ({ comment, onDelete }) => {
  const [commentVote, setCommentVote] = useState(comment.votes);

  function handleVotesClick(isUpVote) {
    let newVote = isUpVote ? commentVote + 1 : commentVote - 1;
    setCommentVote(newVote);
  }

  const isAuthor = comment.author === "tickle122";

  return (
    <div>
      <Col xs={7}>
        <Card className="commentList-container">
          <Card.Header className="comment-header" align="left">
            <Image
              className="avatar-img"
              src="https://ca.slack-edge.com/T01KPE0QGCD-U066BE21ALW-g582122507ca-512"
              roundedCircle
            />
            {comment.author}

            <span className="votes">
              <Button className="vote-button" variant="light">
                {" "}
                <Image
                  className="voteIcon-img"
                  src="https://www.svgrepo.com/show/334337/upvote.svg"
                  thumbnail
                  onClick={() => {
                    handleVotesClick(true);
                  }}
                />
              </Button>
              <Button className="vote-button" variant="light">
                <Image
                  className="voteIcon-img"
                  src="https://www.svgrepo.com/show/333916/downvote.svg"
                  thumbnail
                  onClick={() => {
                    handleVotesClick(false);
                  }}
                />
              </Button>
              <span className="votes-text">{commentVote}</span>
            </span>
          </Card.Header>
          <Card.Body>{comment.body}</Card.Body>
          <div className="delete-btn-container">
            {" "}
            {/* Wrap the delete button with this container */}
            {isAuthor && (
              <Button
                variant="danger"
                className="delete-btn"
                onClick={() => onDelete(comment.comment_id)}
              >
                Delete
              </Button>
            )}
          </div>
        </Card>
      </Col>
    </div>
  );
};

export default CommentCard;
