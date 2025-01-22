import React from 'react';
import useRequest from '../hooks/user-request.js';
import { useNavigate } from 'react-router-dom';

export default ({ currentUser }) => {
   const navigate = useNavigate();
    const { doRequest, errors } = useRequest({
      url: 'http://localhost:4000/api/user/signout',
      method: 'post',
      onSuccess: () => navigate("/signin")
    });  

  const onClick = async event => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <button className="navbar-brand" onClick={onClick}>
        Signout
      </button>
      { errors }
    </nav>
  );
};
