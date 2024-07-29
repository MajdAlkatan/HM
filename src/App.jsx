// App.jsx
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Header from "./sections/Header/Header";
import NavBar from "./sections/NavBar/NavBar";
import Footer from "./sections/Footer/Footer";
import Container from "./sections/Container/Container";
import Container2 from "./sections/Container2/Container2";
import Hotel_Dashboard from "./Pages/Hotel/Hotel_Dashboard/Hotel_Dashboard";
import Add_Hotel from "./Pages/Hotel/Add_Hotel/Add_Hotel";
import Home from "./Pages/Home/Home";
import Hotel_Page from "./Pages/Hotel/Hotel-Page/Hotel-Page";
import Add_Room from "./Pages/Hotel/Add_Room/Add_Room";
import Activities from "./Pages/Activities/Activities_dashboard/Activities";
import Car_rental from "./Pages/Cars/Car_Dashboard/Car_rental";
import Add_Car from "./Pages/Cars/Add_Car/Add_Car";
import Add_Site from "./Pages/Activities/Add_Site/Add_Site";
import Add_Trip from "./Pages/Activities/Add_Trip/Add_Trip";
import Site from "./Pages/Activities/Site/Site";
import Userpage from "./Pages/Userpage/Userpage";
import Login from "./Pages/Login/Login";
import Profile from './Pages/Profile/Profile'
import ProfileDialoge from "./Pages/Profile/ProfileDialoge";
import Services from './Pages/Services/Services'
import Category from './Pages/Services/Tags/Category/Category'
import Tags from './Pages/Services/Tags/Tags'
function App() {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);

  useEffect(() => {
    // Check if user is authenticated and redirect accordingly
    const pathname = window.location.pathname;
    if (!isAuthenticated && pathname !== '/login') {
      window.location.pathname = '/login';
    }
  }, [isAuthenticated]);

  return (
    <Router>
      {isAuthenticated ? (
        <div>
          <Header />
          <Container>
            <NavBar />
            <Container2>
              <Routes>
                <Route path="/home-Page" element={<Home />} />
                <Route path="/profile" element={<Profile />} />

                <Route path="/hotel-dashboad" element={<Hotel_Dashboard />} />
                <Route path="/add-hotel" element={<Add_Hotel />} />
                <Route path="/hotel-Page" element={<Hotel_Page />} />
                <Route path="/add-room" element={<Add_Room />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/Site/:id" element={<Site />} />
                <Route path="/CarRental_dashboard" element={<Car_rental />} />
                <Route path="/add_car" element={<Add_Car />} />
                <Route path="/add_site" element={<Add_Site />} />
                <Route path="/add_trip" element={<Add_Trip />} />
                <Route path="/Edit_profile" element={<ProfileDialoge/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/add_category" element={<Category/>} />
                <Route path="/add_tag" element={<Tags/>} />


                <Route path="/UserProfile" element={<Userpage />} />
                <Route path="*" element={<Navigate to="/home-Page" />} />
              </Routes>
            </Container2>
          </Container>
          <Footer />
        </div>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
