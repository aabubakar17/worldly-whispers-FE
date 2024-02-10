import React, { useState } from "react";
import { Button, Card, Col, Image, Modal } from "react-bootstrap";

const CommentCard = ({ comment, onDelete, commentID }) => {
  const [commentVote, setCommentVote] = useState(comment.votes);
  const [showModal, setShowModal] = useState(false);

  function handleVotesClick(isUpVote) {
    let newVote = isUpVote ? commentVote + 1 : commentVote - 1;
    setCommentVote(newVote);
  }

  const isAuthor = comment.author === "tickle122";

  const handleDelete = () => {
    onDelete(commentID);
    setShowModal(true); // Show the modal after delete operation
  };

  return (
    <div>
      <Col xs={7}>
        <Card className="commentList-container" style={commentCardStyle}>
          <Card.Header className="comment-header" align="left">
            <Image
              className="avatar-img"
              src="https://ca.slack-edge.com/T01KPE0QGCD-U066BE21ALW-g582122507ca-512"
              roundedCircle
            />
            <span style={{ color: "white" }}>{comment.author}</span>

            <span className="votes">
              <Image
                className="voteIcon-img"
                src="https://www.svgrepo.com/show/334337/upvote.svg"
                thumbnail
                onClick={() => {
                  handleVotesClick(true);
                }}
                style={{ cursor: "pointer" }}
              />

              <Image
                className="voteIcon-img"
                src="https://www.svgrepo.com/show/333916/downvote.svg"
                thumbnail
                onClick={() => {
                  handleVotesClick(false);
                }}
                style={{ cursor: "pointer" }}
              />

              <span className="votes-text" style={{ color: "white" }}>
                {commentVote}
              </span>
            </span>
          </Card.Header>
          <Card.Body style={{ color: "white" }}>{comment.body}</Card.Body>
          <div className="delete-btn-container">
            {isAuthor && (
              <Button
                variant="danger"
                className="delete-btn"
                onClick={handleDelete}
              >
                Delete
              </Button>
            )}
          </div>
        </Card>
      </Col>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#28a745", color: "#fff" }}
        >
          <Modal.Title>Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>The comment has been successfully deleted.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// Define the custom styles for the comment card
const commentCardStyle = {
  background: "linear-gradient(to bottom, #8a2be2, #4b0082)",
  borderRadius: "15px",
};

export default CommentCard;
