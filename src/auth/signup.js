import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useRequest from '../hooks/user-request.js';

export default () => {

  const navigate = useNavigate();  
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const { doRequest, errors } = useRequest({
    url: 'https://blog-post-app-backend-zocg.onrender.com/api/user/signup',
    method: 'post',
    body: {
      email,
      password
    },
    onSuccess: () =>  navigate("/signin")
  });


  const onSubmit = async event => {
    event.preventDefault();
    console.log('form submitted -> ', event);

    await doRequest();
  };


  return (
    <form onSubmit={ onSubmit }>
      <h1 className="m-3">Sign Up</h1>
      <div className="form-group m-3">
        <label>Email Address</label>
        <input
          value={ email }
          onChange={ e => setEmail(e.target.value) }
          className="form-control"
        />
      </div>
      <div className="form-group m-3">
        <label>Password</label>
        <input
          value={ password }
          onChange={ e => setPassword(e.target.value) }
          type="password"
          className="form-control"
        />
      </div>
      { errors }
      <button className="btn btn-primary m-3">Sign Up</button>
    </form>
  );
};
