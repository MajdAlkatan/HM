import PropTypes from "prop-types";
import Slider from "react-slick";
import './Portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio({ images, onClickNav, captionText, captionLabel }) {
  // Check if images is an array


  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="portfolio">
      <Slider {...settings} className="imgs-container" >
        {images.map((image, index) => (
          <div key={index} className="box" onClick={() => onClickNav()}>
            <img src={image} alt={`Image ${index}`} />
            <div className="caption">
              
              <h4>{captionText[index]}</h4>
              <p>{captionLabel[index]}</p>
            </div>
          </div>
        ))}
      </Slider>
      <a href="#cd" className="more">More</a>
    </div>
  );
}

Portfolio.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickNav: PropTypes.func.isRequired,
  captionText: PropTypes.string, // New prop for h4 text
  captionLabel: PropTypes.string // New prop for p text
};

export default Portfolio;
