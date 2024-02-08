import React, { useState } from "react";
import ArticleHeader from "./ArticleHeader";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { patchVoteByArticleID } from "../api";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const ArticleSection = ({ currentArticle }) => {
  const [articleVote, setArticleVote] = useState(currentArticle.votes);
  const [showModal, setShowModal] = useState(false);

  function handleVotesClick(isUpVote) {
    let newVote = isUpVote ? articleVote + 1 : articleVote - 1;
    setArticleVote(newVote);
    patchVoteByArticleID(currentArticle.article_id, newVote).catch(() => {
      setArticleVote((currentVote) => {
        return currentVote - 1;
      });

      setShowModal(true);
    });
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="article-sec">
      <Stack gap={3}>
        <Row>
          <Col xs={8}>
            <ArticleHeader title={currentArticle.title} />
          </Col>

          <Col xs={2}>
            <div className="article-votes">
              <Button className="vote-button" variant="light">
                <Image
                  className="article-voteIcon-img"
                  src="https://www.svgrepo.com/show/334337/upvote.svg"
                  thumbnail
                  onClick={() => {
                    handleVotesClick(true);
                  }}
                />
              </Button>
              <Button className="vote-button" variant="light">
                <Image
                  className="article-voteIcon-img"
                  src="https://www.svgrepo.com/show/333916/downvote.svg"
                  thumbnail
                  onClick={() => {
                    handleVotesClick(false);
                  }}
                />
              </Button>

              <span className="article-votes-text" align="left">
                {articleVote}
              </span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Image src={currentArticle.article_img_url} rounded />
          </Col>
        </Row>
        <Row>
          <p align="left">{currentArticle.body}</p>
        </Row>
        <Row></Row>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Something went wrong, please try again.</p>
          </Modal.Body>
        </Modal>
      </Stack>
    </div>
  );
};

export default ArticleSection;
