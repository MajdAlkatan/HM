import './App.css'
import Login from './Pages/Login/Login'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import videoFile from './assets/vid.mp4';
import Home from './Pages/Home/Home';

function App() {


  return (
    <div className='vid' >  
     <video autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
      </video> 
      
      <Router>
      
     <Routes>
     <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
    </Router>
    </div>
  )
}

export default App
