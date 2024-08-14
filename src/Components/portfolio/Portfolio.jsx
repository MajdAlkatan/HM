import PropTypes from "prop-types";
import Slider from "react-slick";
import './Portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio({ images, onClickNav }) {
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
        {images.map((image, index) => (
          <div key={index} className="box" onClick={() => onClickNav(index)}>
            <img src={image.photos[0]?.image} alt={image.name} />
            <div className="caption">
              <h4>{image.name}</h4>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <a href="#cd" className="more">More</a>
    </div>
  );
}

Portfolio.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    photos: PropTypes.arrayOf(PropTypes.shape({
      image: PropTypes.string.isRequired,
    })).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  onClickNav: PropTypes.func.isRequired,
};

export default Portfolio;
