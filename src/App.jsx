
import Login from './Login/Login'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import videoFile from './assets/vid.mp4';

function App() {


  return (
    <div className='vid' >  
     <video autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video> 
      <Router>
      <Login />
    </Router>
    </div>
  )
}

export default App
