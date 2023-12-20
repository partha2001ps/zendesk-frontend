import React, { useState } from 'react'
import { authInstance } from '../services/instance';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
    const [singindata, setSingindata] = useState({
        email: '',
        password: ''
      });
  const [msg, setMsg] = useState('')
  const [showactive, setshowactive] = useState('')
  const navigate=useNavigate()
    const handleSingIn = async (e) => {
        e.preventDefault();
        try {
          const user = await authInstance.post('/user/signin', singindata)
          sessionStorage.setItem('User', JSON.stringify(user.data));
          const storedMenteeId = sessionStorage.getItem('User');
          const menteeId =JSON.parse( storedMenteeId).user;
        
          setMsg(user.data.message)
          // console.log('login Done', user.data)
          // console.log(menteeId)
          if(msg=='Password is incorrect'||msg=='User not found!')
          {
            navigate('/signin')
          }
          else if (menteeId=='student') {
            navigate('/dashboard')
          }
          else if (menteeId == 'mentee') {
            navigate('/admin')
          }
            setSingindata({
                email: '',
                password: ''
            })
        } catch (e) {
            console.log('Error in signin', e);
        }
  }
  const handleActiveLink = async () => {
    try {
      const email=singindata.email
      const res = await authInstance.post(`/user/active-link/${email}`);
      setshowactive(res.data.message)
    } catch (e) {
      console.log('Error occurred in Active link', e);
    }
  };
  return (
    <div className='container'>
          <div className='outside'>
            <h2>ZEN USER LOGIN</h2>
            <form onSubmit={handleSingIn} className='form'>
              <div>
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={singindata.email}
                  onChange={(e) => setSingindata({ ...singindata, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <br />
                <input
                  type="password"
                  name="password"
                  value={singindata.password}
                  onChange={(e) => setSingindata({ ...singindata, password: e.target.value })}
                  required
                />
              </div>
              <br />
          <button type="submit">Submit</button>
          <button onClick={handleActiveLink} className="activate-link-button">Activate Link</button>
        <p>{showactive }</p>
        </form>
        <div><p>{msg}</p></div>
        <Link to='/reset-password'>Forget Password</Link>
        <p>If New User Please Register</p>
        <Link to='/signup'>SingUp</Link>
      </div>
        </div>
  )
}

export default SignIn