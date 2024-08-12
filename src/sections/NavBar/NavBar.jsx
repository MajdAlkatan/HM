import './NavBar.css';
import { FaHome, FaCar, FaUsers } from 'react-icons/fa';
import { MdHotel } from 'react-icons/md';
import { IoSettings, IoLanguageSharp } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Pages/Login/LoginSlice';
import Logout from '../../Components/logout/logout';
import { IoMdPricetags } from "react-icons/io";
import { FaMapSigns, FaCalendarAlt, FaTags } from 'react-icons/fa'; // Added FaTags
import { t, setLanguage } from '../../../translationUtility';

const NavBar = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Initialize current language state

  useEffect(() => {
    setLanguage(currentLanguage); // Update the global language state when currentLanguage changes
  }, [currentLanguage]);

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const toggleLanguage = (event) => {
    const selectedLanguage = event.target.value.toLowerCase(); // Get the selected language from the dropdown
    setCurrentLanguage(selectedLanguage); // Update the current language
    setLanguage(selectedLanguage); // Update the translation utility's language
    setShowLanguageDropdown(false); // Close the dropdown after selecting a language
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
  
  const gotoservicestPage = () => {
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
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    dispatch(setUser(null));
    navigate('/login');
  };

  return (
    <div className='NavBar'>
      <ul>
        <li onClick={goToHomePage}>
          <FaHome className="nav-icon" /> {t('home')}
        </li>
        <li onClick={goToHotelPage}>
          <MdHotel className="nav-icon" /> {t('hotel')}
        </li>

        <li onClick={goToActivitiesPage}>
          <FaCar className="nav-icon" /> {t('activities')}
        </li>
        <li onClick={gotoUserPage}>
          <FaUsers className="nav-icon" /> {t('users')}
        </li>
      
        <hr />
        <li onClick={gotoservicestPage}>
          <IoMdPricetags className="nav-icon" /> {t('services')}
        </li>
        <li onClick={gotoGuidPage}>
          <FaMapSigns className="nav-icon" /> {t('guid')}
        </li>
        <li onClick={gotoEvents}>
          <FaCalendarAlt className="nav-icon" /> {t('events')}
        </li>
        <li onClick={gotoDiscountpage}>
          <FaTags className="nav-icon" />  {t('discount')}
        </li>
        <hr />

        <li onClick={toggleLanguageDropdown}>
          <IoSettings className="nav-icon" />  {t('settings')}
        </li>
        {showLanguageDropdown && (
          <>
            <li className='language' onClick={toggleLanguage}>
              <IoLanguageSharp className="nav-icon" /> {t('language')}
            </li>
            <li className="language-dropdown">
              <select onChange={toggleLanguage} value={currentLanguage.toUpperCase()}>
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </li>
          </>
        )}
   
        <hr />
        <li className='logoutm' onClick={handleLogout}>
          <Logout/>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
