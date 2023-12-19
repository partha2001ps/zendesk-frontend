import React, { useState } from 'react'
import { authInstance } from '../services/instance';
import { Link, useNavigate } from 'react-router-dom';

function MenteeSignin() {
  const [singindata, setSingindata] = useState({
    email: '',
    password: ''
  });
  const navigate=useNavigate()
const [msg, setMsg] = useState('')
const handleSingIn = async (e) => {
    e.preventDefault();
    try {
        const user = await authInstance.post('/mentee/signin', singindata)
      console.log('login Done', user.data)
      sessionStorage.setItem('Admin', JSON.stringify(user.data));
      navigate('/admin')
      setMsg(user.data.message)
        setSingindata({
            email: '',
            password: ''
        })
    } catch (e) {
        console.log('Error in signin', e);
    }
}
  return (
    <div className='container'>
    <div className='outside'>
      <h2>ZEN MENTOR LOGIN</h2>
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
      </form>
  <div><p>{msg}</p></div>
  <Link to='/mentee-reset'>Forget Password</Link>
  <p>If New User Please Register</p>
  <Link to='/mentee-signup'>SingUp</Link>
</div>
  </div>
  )
}

export default MenteeSignin