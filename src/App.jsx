import './App.css'
//import Login from './Pages/Login/Login'
//import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
//import Home from './Pages/Home/Home';
//import Hotel_Dashboard from './Pages/Hotel_Dashboard/Hotel_Dashboard';
import Header from './sections/Header/Header'
import NavBar from './sections/NavBar/NavBar'
import Footer from './sections/Footer/Footer'
import Container from './sections/Container/Container'
import Container2 from './sections/Container2/Container2'

import { Portfolio, Statistics1, Statistics2, Statistics3, Statistics4 } from './sections/Components/index'

function App() {


  return (
    <div>

      <Header />
      <Container>
        <NavBar />
        <Container2>
          <Portfolio/>
          <Statistics1 />
          <Statistics2 />
          <Statistics3 />
          <Statistics4/>
        </Container2>
      </Container>

      <Footer />

    </div>
  )
}

export default App
