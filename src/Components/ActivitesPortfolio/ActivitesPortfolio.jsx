import PropTypes from "prop-types";
import Slider from "react-slick";
import './ActivitesPortfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ActivitesPortfolio({ images, onClickNav }) {
  if (!Array.isArray(images)) {
    console.error('Expected images prop to be an array', images);
    return null; 
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div className="portfolio">
      <Slider {...settings} className="imgs-container">
        {images.map((image) => (
          <div key={image.id} className="box" onClick={() => onClickNav(image.id)}>
            
            <img src={image.photo} alt={''} />
            <div className="caption">
              <h4>{''}</h4>
              <p>Album ID: {''}</p>
            </div>
          </div>
        ))}
      </Slider>
      <a href="#cd" className="more">More</a>
    </div>
  );
}

ActivitesPortfolio.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    photo: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  onClickNav: PropTypes.func.isRequired,
};


export default ActivitesPortfolio;
