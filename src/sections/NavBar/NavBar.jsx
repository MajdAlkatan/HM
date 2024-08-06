import './NavBar.css';
import { FaHome, FaCar, FaUsers } from 'react-icons/fa';
import { MdHotel } from 'react-icons/md';
import { IoSettings, IoLanguageSharp } from "react-icons/io5";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Pages/Login/LoginSlice';
import Logout from '../../Components/logout/logout';
import { IoMdPricetags } from "react-icons/io";
// Import the new icons you want to use
import { FaMapSigns, FaCalendarAlt, FaTags } from 'react-icons/fa'; // Added FaTags

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
  
  const gotoEventPage = () => {
    navigate('/services');
  };

  const gotoUserPage = () => {
    navigate('/UserProfile');
  };
  const gotoGuidPage = () => {
    navigate('/Guidspage');
  };
  const gotoEvents = () => {
    navigate('/EventDash');
  };
  const gotoDiscountpage = () => {
    navigate('/Discountpage');
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

        <li onClick={goToActivitiesPage}>
          <FaCar className="nav-icon" /> Activities
        </li>
        <li onClick={gotoUserPage}>
          <FaUsers className="nav-icon" /> Users
        </li>
      
        <hr />
        <li onClick={gotoEventPage}>
          <IoMdPricetags className="nav-icon" /> Services
        </li>
        <li onClick={gotoGuidPage}>
          <FaMapSigns className="nav-icon" /> Guid
        </li>
        <li onClick={gotoEvents}>
          <FaCalendarAlt className="nav-icon" /> Events
        </li>
        <li onClick={gotoDiscountpage}>
          <FaTags className="nav-icon" /> Discount
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
          <Logout/>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
