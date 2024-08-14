// src/components/Footer.js
import './Footer.css';
import imagefooter from './../../assets/footer.svg';
import { t } from '../../../translationUtility'; // Make sure the path is correct

const Footer = () => {
  return (
    <div className='footer'>
      <span>{t('navbar.footer')}</span>
      <div className='imagee'>
        <img src={imagefooter} alt="Footer" />
      </div>
    </div>
  );
};

export default Footer;
