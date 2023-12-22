import React, { useState } from 'react'
import { authInstance } from '../services/instance';
import { Link, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

function SignIn() {
    const [singindata, setSingindata] = useState({
        email: '',
        password: ''
      });
  const [msg, setMsg] = useState('')
  const [showactive, setshowactive] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const handleSingIn = async (e) => {
      
    e.preventDefault();
    setLoading(true); 
        try {
          const user = await authInstance.post('/user/signin', singindata)
          sessionStorage.setItem('User', JSON.stringify(user.data));
          const storedMenteeId = sessionStorage.getItem('User');
          const menteeId =JSON.parse( storedMenteeId).user;
          setLoading(false); 
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
    <div className='signup'>
          <div className='outside'>
            <h2 className='title'>ZEN USER LOGIN</h2>
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
          <button className='submit' type="submit">{loading ?(<div><RotatingLines
  visible={true}
  height="46"
  width="46"
  color="white"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></div>):(<div>Submit</div>) }</button>
         {msg=='Go to your email and click the activation link to login.'?( <><p>To click Active Link or Go to Mail Check it Active link click</p><button  onClick={handleActiveLink} className="activate-link-button">Activate Link</button></>):null}
        <p>{showactive }</p>
        </form>
        <div className='message'><p>{msg}</p></div>
        <Link to='/reset-password'>Forget Password</Link>
        <p>If New User Please Register</p>
        <Link className='link' to='/signup'>SingUp</Link>
      </div>
        </div>
  )
}

export default SignIn