import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { authInstance } from '../services/instance';

function MenteeSignUp() {
  const [singupdata, setSingupdata] = useState({
    name :'',email:'', password :''
  });
  const[mgs,setMgs]=useState('')
  const navigate = useNavigate();
  
  const handlesingup =async (e) => {
    e.preventDefault();
    const user =  await authInstance.post('/mentee/', singupdata)
    console.log(user.data.message)

    setSingupdata({ name :'',email:'', password :''
  })
    setMgs(user.data.message)
  };

  useEffect(() => {
    if (mgs === 'user created successfully') {
      const timerId = setTimeout(() => {
        navigate('/mentee-signin');
      }, 3000);
      return () => clearTimeout(timerId);
    }
  }, [mgs, navigate]);
  return (
    <div className='signup'>
    <div className='outside'>
     <div className='back'> <form onSubmit={handlesingup} >
      <h2>ZEN SIGNUP FROM :</h2>
      <div>
        <label>Name:</label><br />
        <input
          type="text"
          name='firstname'
          value={singupdata.name}
          onChange={(e) => setSingupdata({ ...singupdata, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Email:</label><br />
        <input
          type="email"
          name='email'
          value={singupdata.email}
          onChange={(e) => setSingupdata({ ...singupdata, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Password:</label><br />
        <input
          type="password"
          name='password'
          value={singupdata.password}
          onChange={(e) => setSingupdata({ ...singupdata, password: e.target.value })}
          required
        />
      </div>
      <br />
      <button type='submit'>Submit</button>
      <p>{ mgs}</p>
        </form>

    <p>Already User To LogIn Page Go</p>
    <Link to='/mentee-signin'>SignIn</Link></div>
  </div>
  </div>
  )
}

export default MenteeSignUp