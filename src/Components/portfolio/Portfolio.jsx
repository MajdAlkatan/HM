import PropTypes from "prop-types";
import Slider from "react-slick";
import './Portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio({ images, onClickNav }) {
  // Check if images is an array
  if (!Array.isArray(images)) {
    console.error('Expected images prop to be an array', images);
    return null; 
  }

  // Slider settings
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
          <div key={image.id} className="box" onClick={onClickNav}>
            <img src={image.url} alt={image.title} />
            <div className="caption">
              <h4>{image.title}</h4>
              <p>Album ID: {image.albumId}</p>
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
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    albumId: PropTypes.number.isRequired,
  })).isRequired,
  onClickNav: PropTypes.func.isRequired,
};


export default Portfolio;
