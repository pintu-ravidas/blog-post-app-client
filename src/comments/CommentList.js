import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content = comment.title;
    return <li key={comment.commentId}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
