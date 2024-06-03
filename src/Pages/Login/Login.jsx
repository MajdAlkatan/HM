import './Login.css';
import { useState,useEffect } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/fontawesome-free-solid';
import videoFile from '../../assets/vid.mp4';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from './LoginSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Login = () => {
  const dispatch = useDispatch();


  // const loginState = useSelector(state => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
 
  

  const handleLogin = () => {
    dispatch(loginUser({email,password}))
};

useEffect(() => {
    if (isAuthenticated) {
        navigate('/hotel-Page'); 
    }
}, [isAuthenticated, navigate]);

  return (
    <>
    <video autoPlay loop muted>
    <source src={videoFile} type="video/mp4" />
  </video> 
    <div className='container'>
      <div className='image'>
        <span className='PingoWay'> Pingoway</span>
        <span className='Welcome'> Welcome</span>
        <video autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
      <div className='login'>
        <span className='welcom'>Welcom Back...</span>
        <div className='inputs'>
          <input
          
            className='user'
            type="text"
            placeholder='Email'
            inputMode='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
          { <FontAwesomeIcon className='icon-user' icon={faUser} /> }
          <input
            className='password'
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
                
          />
          { <FontAwesomeIcon className='icon-password' icon="fa-solid fa-lock" /> }

          <Link href="/" className='forget-password'>forget your password?</Link>
        </div>
        <button className='login-button' onClick={handleLogin} >Login</button>
      </div>
    </div>
    </>
  );
}

export default Login;
