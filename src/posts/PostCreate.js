import React, { useState } from "react";
import useRequest from '../hooks/user-request.js';
import { useNavigate } from 'react-router-dom';

const PostCreate = () => {
 
    const navigate = useNavigate();  
    const [title, setTitle] = useState('');
    const { doRequest, errors } = useRequest({
      url: 'http://localhost:4000/api/posts/create',
      method: 'post',
      body: {
        title
      },
      onSuccess: () => navigate("/post")
    });  

  const onSubmit = async event => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <div>
      <form onSubmit={ onSubmit }>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
