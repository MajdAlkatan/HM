import './Login.css'
import  { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock } from '@fortawesome/fontawesome-free-solid'; // Import the specific icon
import videoFile from '../assets/vid.mp4';
import { useSelector,useDispatch} from "react-redux"
import { Link } from 'react-router-dom'
import { login } from './LoginSlice';
// import { useNavigate } from 'react-router-dom'; 
const Login = () => {
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.login); // Assuming your login state is stored under 'login'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();
 
  const handleLogin =async (e) => {
     e.preventDefault();
     try {
      await dispatch(login({ email, password })).unwrap();
      // Now that the login action has completed, check the login state and navigate
      if (loginState) {
        console.log('success');
        // navigate('/home'); // Navigate to the home page
      }
   } catch (error) {
      console.error('Login failed:', error);}
  };
 
  return (
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
          <input className='user' type="text" placeholder='user name'      value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <FontAwesomeIcon className='icon-user' icon={faUser}/>
          <input className ='password' type="text" placeholder='password'   value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          <FontAwesomeIcon className='icon-password' icon={faLock} />
          <Link href="/" className='forget-password'>forget your password?</Link>        
          </div>
        <button className='login-button' onClick={handleLogin}>Login</button>
      </div>
    </div> 
  )
}

export default Login