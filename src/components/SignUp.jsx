import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { authInstance } from '../services/instance';
import './login.css'

function SignUp() {
  const [singupdata, setSingupdata] = useState({
    name :'',email:'', password :''
  });
  const[mgs,setMgs]=useState('')
  const navigate = useNavigate();
  const [showactive, setshowactive] = useState('')
  
  const handlesingup =async (e) => {
    e.preventDefault();
    const user =  await authInstance.post('/user/', singupdata)
    // console.log(user.data.message)

    const email=singupdata.email
    const res = await authInstance.post(`/user/active-link/${email}`);
    setshowactive(res.data.message)
    setSingupdata({ name :'',email:'', password :''
  })
    setMgs(user.data.message)
  };

  useEffect(() => {
    if (mgs === 'user created successfully') {
      const timerId = setTimeout(() => {
        navigate('/signin');
      }, 10000);
      return () => clearTimeout(timerId);
    }
  }, [mgs, navigate]);
  return (
    <div className='signup'>
    <div className='outside'>
     <div className='back'> <form onSubmit={handlesingup} >
      <h2 className='title'>ZEN SIGNUP FROM :</h2>
      <div className='form-group'>
        <label className='name'>Name:</label><br />
        <input
          type="text"
          name='firstname'
          value={singupdata.name}
          onChange={(e) => setSingupdata({ ...singupdata, name: e.target.value })}
          required
        />
      </div>
      <div className='form-group'>
        <label  className='name'>Email:</label><br />
        <input
          type="email"
          name='email'
          value={singupdata.email}
          onChange={(e) => setSingupdata({ ...singupdata, email: e.target.value })}
          required
        />
      </div>
      <div className='form-group'>
        <label  className='name'>Password:</label><br />
        <input
          type="password"
          name='password'
          value={singupdata.password}
          onChange={(e) => setSingupdata({ ...singupdata, password: e.target.value })}
          required
        />
      </div>
      <br />
      <button className='submit' type='submit'>Submit</button>
      <p className='message'>{ mgs}</p>
        </form>
        <p className="show-active">{showactive}</p>
    <p>Already User To LogIn Page Go</p>
    <Link className='link' to='/signin'>SignIn</Link></div>
  </div>
  </div>
  )
}
export default SignUp