import PropTypes from "prop-types";
import Slider from "react-slick";
import './Portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio({ images }) {
  // Check if images is an array
  if (!Array.isArray(images)) {
    console.error('Expected images prop to be an array');
    return null; 
  }

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="portfolio">
      <Slider {...settings} className="imgs-container">
        {images.map((image, index) => (
          <div key={index} className="box" onClick={() => window.location.href = `/hotel-Page`}> {/* Adjust navigation as needed */}
            <img src={image} alt={`Image ${index}`} />
            <div className="caption">
              <h4>Awesome Image {index + 1}</h4>
              <p>Photography</p>
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
};

export default Portfolio;