import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { postComment } from "../api";
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
    } else {
      setCommentRecord((currentComments) => {
        return [commentToPost, ...currentComments];
      });
      setCommentToPost({
        body: "",
        author: "tickle122",
        votes: 0,
      });
      postComment(articleId, commentToPost)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
          setCommentRecord(commentsRecord);

          setShowModal(true);
        });
    }
  }
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
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
