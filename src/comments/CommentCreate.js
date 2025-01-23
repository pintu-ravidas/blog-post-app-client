import { useState, useEffect } from 'react';
import useRequest from '../hooks/user-request.js';
import { useNavigate } from 'react-router-dom';

export default ({ postId }) => {
  const navigate = useNavigate();  
  const [title, setComment] = useState('');
  const { doRequest, errors } = useRequest({
    url: `https://blog-post-app-backend-zocg.onrender.com/api/comments/${postId}/create`,
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
    <form onSubmit={onSubmit}>
      <h1>Comments</h1>
      <div className="form-group">
        <label>New Comment</label>
        <input
          value={title}
          onChange={e => setComment(e.target.value)}
          className="form-control"
        />
      </div>
      { errors }
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
