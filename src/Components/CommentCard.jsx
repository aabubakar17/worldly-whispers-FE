import React, { useState } from "react";
import { Button, Card, Col, Image, Modal, Row } from "react-bootstrap";

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
    <Col xs={11} md={8}>
      {" "}
      <Row style={{ marginBottom: "20px", marginLeft: "2rem" }}>
        <div className="comment-wrapper" style={commentWrapperStyle}>
          <Col xs={12} className="d-flex justify-content-center">
            <Card className="commentList-container" style={commentCardStyle}>
              <Card.Header className="comment-header" align="left">
                <Image
                  className="avatar-img"
                  src="https://ca.slack-edge.com/T01KPE0QGCD-U066BE21ALW-g582122507ca-512"
                  alt={`${comment.author} avatar`}
                  roundedCircle
                />
                <span style={{ color: "black" }}>{comment.author}</span>

                <span className="votes">
                  <Image
                    className="voteIcon-img"
                    src="https://www.svgrepo.com/show/334337/upvote.svg"
                    alt="vote up button"
                    thumbnail
                    onClick={() => {
                      handleVotesClick(true);
                    }}
                    style={{ cursor: "pointer" }}
                  />

                  <Image
                    className="voteIcon-img"
                    src="https://www.svgrepo.com/show/333916/downvote.svg"
                    alt="vote down button"
                    thumbnail
                    onClick={() => {
                      handleVotesClick(false);
                    }}
                    style={{ cursor: "pointer" }}
                  />

                  <span className="votes-text" style={{ color: "black" }}>
                    {commentVote}
                  </span>
                </span>
              </Card.Header>
              <Card.Body style={{ color: "black" }}>{comment.body}</Card.Body>
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
      </Row>
    </Col>
  );
};

const commentWrapperStyle = {
  marginTop: "2rem",
  background: "linear-gradient(to bottom, #8a2be2, #4b0082)",
  borderRadius: "35px",
  padding: "1px",
};

const commentCardStyle = {
  border: "1px solid #8a2be2",
  borderRadius: "20px",
};

export default CommentCard;
