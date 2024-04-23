import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/fontawesome-free-solid'; // Import the specific icon

//import { useSelector,useDispatch} from "react-redux"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='container'>
<div className='image'>
<span className='PingoWay'> Pingoway</span>
<span className='Welcome'> Welcome</span>
</div>
    <div className='login'>
      <span className='welcom'>Welcom Back...</span>
        <div className='inputs'>
          <input className='user' type="text" placeholder='user name'/>
          <FontAwesomeIcon className='icon-user' icon={faUser}/>
          <input className ='password' type="text" placeholder='password' />
          <FontAwesomeIcon className='icon-password' icon="fa-solid fa-lock" />
          <Link href="/" className='forget-password'>forget your password?</Link>        
          </div>
        <button className='login-button'>Login</button>
      </div>
    </div> 
  )
}

export default Login
