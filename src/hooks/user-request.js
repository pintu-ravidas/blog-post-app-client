import axios from 'axios';
import { useState } from 'react';

axios.defaults.baseURL='http://localhost:4000';
axios.defaults.withCredentials=true;

export default ({ url, method, body, onSuccess }) => {
    //console.log('withCredentials -> ', withCredentials)
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      console.log('props hooks -> ', props)
      const response = await axios[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {

        console.log('error -> ', err)
        console.log('err.response.data.errors -> ', err.response.data.errors)
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops....</h4>
          <ul className="my-0">
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.msg}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
