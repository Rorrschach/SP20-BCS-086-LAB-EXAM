import React from "react";

const Posts = (props) => {
  return (
    <div>
      <h3>{props.post.title}</h3>
      <p>{props.post.body}</p>
      <hr></hr>
    </div>
  );
};

export default Posts;
