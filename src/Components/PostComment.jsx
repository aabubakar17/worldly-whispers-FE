import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { postComment, getCommentsByID } from "../api";
import Modal from "react-bootstrap/Modal";

const PostComment = ({ articleId, commentsRecord, setCommentRecord }) => {
  const [commentToPost, setCommentToPost] = useState({
    body: "",
    author: "tickle122",
    votes: 0,
  });
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (commentToPost.body === "") {
      setShowModal(true);
      return;
    }

    postComment(articleId, commentToPost)
      .then((response) => {
        return getCommentsByID(articleId);
      })
      .then((comments) => {
        setCommentRecord(comments);
      })
      .catch((error) => {
        console.error("Error posting comment:", error);
        setShowModal(true);
      });

    setCommentToPost({
      body: "",
      author: "tickle122",
      votes: 0,
    });
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="post-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Post a Comment:</Form.Label>
          <Col xs={5}>
            <Form.Control
              as="textarea"
              placeholder="Write your comment here!"
              rows={3}
              value={commentToPost.body}
              onChange={(event) => {
                setCommentToPost({
                  ...commentToPost,
                  body: event.target.value,
                });
              }}
            />
          </Col>
        </Form.Group>
        <Button className="post-btn" variant="light" type="submit">
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Something went wrong, please try again.</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PostComment;
