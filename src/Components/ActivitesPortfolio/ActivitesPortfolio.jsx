import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ActivitesPortfolio.css';

function Home({ images,onClick }) {
 
  if (!Array.isArray(images)) {
    console.error('Expected images prop to be an array');
    return null; // Or render a fallback UI
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
    //   {
    //     breakpoint: 1920,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
      
    ],
  };

  return (
    <div className="portfolios">
      <div className="img-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="boxs" onClick={onClick}>
              <img src={image} alt={`Image ${index}`} />
              <div className="caption">
                <h4>Awesome Image {index + 1}</h4>
                <p>Photography</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <a href="#cd" className="more">More</a>
    </div>
  );
}

Home.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick:PropTypes.func.isRequired
};

export default Home;