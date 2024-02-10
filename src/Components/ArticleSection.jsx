import React, { useState } from "react";
import ArticleHeader from "./ArticleHeader";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { patchVoteByArticleID } from "../api";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
    <>
      <ArticleHeader title={currentArticle.title} />
      <div className="article-sec">
        <div className="article-votes">
          <Button className="vote-button" variant="light">
            <Image
              className="article-voteIcon-img"
              src="https://www.svgrepo.com/show/334337/upvote.svg"
              alt="vote up button"
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
              alt="vote down button"
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

        <Image
          className="article-sec-img"
          src={currentArticle.article_img_url}
          alt={`picture of ${currentArticle.title}`}
          rounded
        />
        <p align="left">{currentArticle.body}</p>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Something went wrong, please try again.</p>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ArticleSection;
