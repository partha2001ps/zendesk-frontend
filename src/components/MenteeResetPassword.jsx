import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function MenteeResetPassword() {
  const [email, setEmail] = useState('');
  const [mgs, setMgs] = useState('');
  const [timerId, setTimerId] = useState(null);
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await authInstance.post('/mentee/reset-password', { email });
      console.log(res.data);
      setMgs(res.data.message);

      if (res.data.message === 'Reset email sent successfully') {
        const newTimerId = setTimeout(() => {
          navigate('/reset-password/new-password/:OTP');
        }, 3000);
        setTimerId(newTimerId);
      }

      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div className="outside">
        <div>
          <h2>Reset Password</h2>
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
            <button onClick={handleSendOTP}>Send Reset Link</button>
            <p>{mgs}</p>
          </div>
        </div>
        <Link to="/mentee-signin">Login</Link>
      </div>
    </div>
  )
}

export default MenteeResetPassword