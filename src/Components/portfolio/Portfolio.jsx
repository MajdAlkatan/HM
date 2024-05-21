import './Portfolio.css'
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

function Portfolio({image}) {
  let navigate = useNavigate(); 
  const goToHotelPage = () => {
    navigate('/hotel-Page'); // Replace '/add-hotel' with the actual route to your Add Hotel page
  };

  return (
    <div className="portfolio">
      <div className="imgs-container" onClick={goToHotelPage}>
        <div className="box" >
          <img src={image} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={image} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={image} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={image} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={image} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={image} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
      </div>
      <a href="#cd" className="more">More</a>
    </div>
  )
}
Portfolio.propTypes = {
  image: PropTypes.string.isRequired,
};
export default Portfolio