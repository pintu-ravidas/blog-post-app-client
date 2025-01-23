import React, { useState } from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
import Signout from '../components/header'

const LandingPage = () => {

  return (
    <div className="container">
      <Signout />
    <h1>Create Post</h1>
       <PostCreate />
    <hr />
    <h1>Posts</h1>
       <PostList />
  </div>
);
};

export default LandingPage;
