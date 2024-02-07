import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const CommentCard = ({ comment }) => {
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
              <Image
                className="voteIcon-img"
                src="https://static-00.iconduck.com/assets.00/upvote-icon-462x512-g0p9l3u3.png"
                thumbnail
              />
              <span className="votes-text">{comment.votes}</span>
            </span>
          </Card.Header>
          <Card.Body>{comment.body}</Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CommentCard;
