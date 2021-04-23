import React from "react";
import { Card } from "react-bootstrap";
import post from "../css/post.css";

function Post() {
  return (
    <div className="container">
      <div className="post">
        <div className="post__header">
          <div className="post__avatar">S</div>Swaitz
        </div>
        <img className="post__img" src="The-Queens-Gambit-Poster.jpg" alt="" />
        <div className="post__like"><div className="like">like</div><div className="comment">comment</div></div>
      </div>
    </div>
  );
}

export default Post;
