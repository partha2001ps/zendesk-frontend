import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authInstance } from '../services/instance';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [mgs, setMgs] = useState('');


  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await authInstance.post('user/reset-password', { email });
      // console.log(res.data);
      setMgs(res.data.message);

      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='signup'>
      <div className="outside">
        <div>
          <h2 className='title'>Reset Password</h2>
          <label>Email Id:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <div>
            <button className='submit' onClick={handleSendOTP}>Send Reset Link</button>
            <p className='message'>{mgs}</p>
          </div>
        </div>
        <Link className='link' to="/signin">Login</Link>
      </div>
    </div>
  );
}

export default PasswordReset;
