import './App.css'
//import Login from './Pages/Login/Login'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
//import Home from './Pages/Home/Home';
//import Hotel_Dashboard from './Pages/Hotel_Dashboard/Hotel_Dashboard';
import Header from './sections/Header/Header'
import NavBar from './sections/NavBar/NavBar'
import Footer from './sections/Footer/Footer'
import Container from './sections/Container/Container'
import Container2 from './sections/Container2/Container2'
import Hotel_Dashboard from './Pages/Hotel/Hotel_Dashboard/Hotel_Dashboard'
import Add_Hotel from './Pages/Hotel/Add_Hotel/Add_Hotel';
import Home from './Pages/Home/Home';
import Hotel_Page from './Pages/Hotel/Hotel-Page/Hotel-Page';
import Add_Room from './Pages/Hotel/Add_Room/Add_Room';
import Activities from './Pages/Activities/Activities_dashboard/Activities';
import Car_rental from './Pages/Cars/Car_Dashboard/Car_rental';
import Add_Car from './Pages/Cars/Add_Car/Add_Car';
import Add_Site from './Pages/Activities/Add_Site/Add_Site';
import Add_Trip from './Pages/Activities/Add_Trip/Add_Trip';

function App() {


  return (
    


<Router>
      <div>
        <Header />
        <Container>
          <NavBar />
          <Container2>
            
            <Routes>
            <Route path="/" element={<Home/>} />

            
            <Route path="/hotel-dashboad" element={<Hotel_Dashboard />} />

              <Route path="/add-hotel" element={<Add_Hotel />} />
              <Route path="/hotel-Page" element={<Hotel_Page/>} />
              <Route path="/add-room" element={<Add_Room />} /> 
              <Route path="/activities" element={<Activities />} />


               <Route path="/CarRental_dashboard" element={<Car_rental/>}/>
               <Route path="/add_car" element={<Add_Car/>}/>
               <Route path="/add_site" element={<Add_Site/>}/>
               <Route path="/add_trip" element={<Add_Trip/>}/>


            
            </Routes>
          </Container2>
        </Container>
        <Footer />
      </div>
    </Router>
  )
}

export default App
/*   */ 