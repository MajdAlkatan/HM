import './NavBar.css';
import { FaHome, FaCar } from 'react-icons/fa';
import { MdHotel } from 'react-icons/md';
import { IoSettings, IoLanguageSharp } from "react-icons/io5";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Pages/Login/LoginSlice';

const NavBar = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const toggleLanguage = () => {
    setShowLanguage(!showLanguage);
  };

  const goToHotelPage = () => {
    navigate('/hotel-dashboad'); 
  };
  
  const goToHomePage = () => {
    navigate('/home-Page'); 
  };
  
  const goToActivitiesPage = () => {
    navigate('/activities'); 
  };
  
  const gotoCarRentalPage = () => {
    navigate('/CarRental_dashboard');
  };

  const gotoUserPage = () => {
    navigate('/UserProfile');
  };

  const handleLogout = () => {
    // إزالة البيانات من localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    // تحديث حالة المصادقة في Redux
    dispatch(setUser(null));
    // إعادة التوجيه إلى صفحة تسجيل الدخول
    navigate('/login');
  };

  return (
    <div className='NavBar'>
      <ul>
        <li onClick={goToHomePage}>
          <FaHome className="nav-icon" /> Home
        </li>
        <li onClick={goToHotelPage}>
          <MdHotel className="nav-icon" /> Hotel
        </li>
        <li onClick={gotoCarRentalPage}>
          <FaCar className="nav-icon" /> Car rental
        </li>
        <li onClick={goToActivitiesPage}>
          <FaCar className="nav-icon" /> Activities
        </li>
        <li onClick={gotoUserPage}>
          <FaCar className="nav-icon" /> Users
        </li>
        <li onClick={''}>
          <FaCar className="nav-icon" /> Profile
        </li>
        <hr />
        <li onClick={toggleLanguageDropdown}>
          <IoSettings className="nav-icon" /> Settings
        </li>
        {showLanguageDropdown && (
          <li className='language' onClick={toggleLanguage}>
            <IoLanguageSharp className="nav-icon" /> Language
          </li>
        )}
        {showLanguage && (
          <li className="language-dropdown">
            <select>
              <option value="En">En</option>
              <option value="Ar">Ar</option>
            </select>
          </li>
        )}
        <hr />
        <li onClick={handleLogout}>
          <FaCar className="nav-icon" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
