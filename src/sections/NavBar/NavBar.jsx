import './NavBar.css';
import { FaHome, FaCar, FaUsers, FaMapSigns, FaCalendarAlt, FaTags} from 'react-icons/fa';
import { MdHotel } from 'react-icons/md';
import { IoSettings, IoLanguageSharp } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Pages/Login/LoginSlice';
import Logout from '../../Components/logout/logout';
import { t, setLanguage } from '../../../translationUtility';
import { IoMdPricetags } from "react-icons/io";

const NavBar = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setLanguage(currentLanguage);
  }, [currentLanguage]);

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value.toLowerCase();
    setCurrentLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    dispatch(setUser(null));
    navigate('/login');
  };

  const navItems = [
    { icon: <FaHome />, label: t('navbar.home'), onClick: () => navigate('/home-Page') },
    { icon: <MdHotel />, label: t('navbar.hotel'), onClick: () => navigate('/hotel-dashboad') },
    { icon: <FaCar />, label: t('navbar.activities'), onClick: () => navigate('/activities') },
    { icon: <FaUsers />, label: t('navbar.users'), onClick: () => navigate('/UserProfile') },
    { icon: <IoMdPricetags />, label: t('navbar.services'), onClick: () => navigate('/services') },
    { icon: <FaMapSigns />, label: t('navbar.guid'), onClick: () => navigate('/Guidspage') },
    { icon: <FaCalendarAlt />, label: t('navbar.events'), onClick: () => navigate('/EventDash') },
    { icon: <FaTags />, label: t('navbar.discount'), onClick: () => navigate('/Discountpage') },

  ];

  return (
    <div className='NavBar'>
      <ul>
        {navItems.map((item, index) => (
          <li key={index} onClick={item.onClick}>
            {item.icon} {item.label}
          </li>
        ))}
        <hr />
        <li onClick={toggleLanguageDropdown}>
          <IoSettings className="nav-icon" /> {t('navbar.settings')}
        </li>
        {showLanguageDropdown && (
          <li className="language-dropdown">
            <IoLanguageSharp className="nav-icon" /> {t('navbar.language')}
            <select onChange={changeLanguage} value={currentLanguage}>
              <option >{t('navbar.select')}</option>
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="fr">Français</option>
              <option value="ro">Română</option>
              <option value="nl">Nederlands</option>
            </select>
          </li>
        )}
        <hr />
        <li className='logoutm' onClick={handleLogout}>
          <Logout />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
