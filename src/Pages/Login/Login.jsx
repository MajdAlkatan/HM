import './Login.css';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/fontawesome-free-solid';
import videoFile from '../../assets/vid.mp4';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from './LoginSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  // const loginState = useSelector(state => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (loading) return; // Prevent multiple clicks if already loading

    // Clear previous error messages
    setEmailError('');
    setPasswordError('');

    // Validate email and password


    if ((!email && !password)) {
      setEmailError('Please enter your email');
      setPasswordError('Please enter your password');

    } else if (!email) {
      setEmailError('Please enter your email');

    } else if(!password) {
      setPasswordError('Please enter your password');
    }


    setLoading(true); // Set loading to true on login attempt

    dispatch(login({ email, password }))
      .then((result) => {
        if (result.payload) {
          console.log('Login successful');
          navigate('/home');
        } else {
          console.log('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error('Login failed:', error);
      })
      .finally(() => {
        setLoading(false); // Reset loading state regardless of success or failure
      });
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
          <input
            className='user'
            type="text"
            placeholder='user name'
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
          {emailError && <h6 className='error'>{emailError}</h6>}
          {/* <FontAwesomeIcon className='icon-user' icon={faUser} /> */}
          <input
            className='password'
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
          {/* <FontAwesomeIcon className='icon-password' icon="fa-solid fa-lock" /> */}
          {passwordError && <h6 className='error'>{passwordError}</h6>}

          <Link href="/" className='forget-password'>forget your password?</Link>
        </div>
        <button className='login-button' onClick={handleLogin} disabled={loading}>Login</button>
      </div>
    </div>
  );
}

export default Login;
