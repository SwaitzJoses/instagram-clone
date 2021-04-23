import React from "react";
import { Card } from "react-bootstrap";
import post from "../css/post.css";

function Post() {
  return (
    <div className="container">
      <div className="post">
        <div className="post__header">
          <div className="post__avatar">S</div>{" "}
          <div className="post__username"> Swaitz</div>
          <button className="post__follow">FOLLOW</button>
        </div>
        <img className="post__img" src="The-Queens-Gambit-Poster.jpg" alt=""  />
        <div className="post__like_comment">
          <button className="post__like">
            <i class="far fa-heart"></i>
          </button>
          <button className="post__comment">
            <i class="far fa-comment"></i>
          </button>
          <div className="post__like_count">100 likes</div>

          <div className="post__review">
            <div className="post__username_review"> Swaitz</div>
            <div className="post__review"> hello world</div>
          </div> </div>
          <div className="post__post_review">
          <input className="post__input" placeholder="Add a Comment..."></input>
          <button className="review__watermark">Post</button></div>
      </div>
    </div>
  );
}

export default Post;
