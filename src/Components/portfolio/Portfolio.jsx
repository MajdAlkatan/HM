// Portfolio.jsx
import PropTypes from "prop-types";
import './Portfolio.css';

function Portfolio({ images }) {
  // Check if images is an array
  if (!Array.isArray(images)) {
    console.error('Expected images prop to be an array');
    return null; // Or render a fallback UI
  }

  return (
    <div className="portfolio">
      <div className="imgs-container">
        {images.map((image, index) => (
          <div key={index} className="box" onClick={() => window.location.href = `/hotel-Page`}> {/* Adjust navigation as needed */}
            <img src={image} alt={`Image ${index}`} />
            <div className="caption">
              <h4>Awesome Image {index + 1}</h4>
              <p>Photography</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#cd" className="more">More</a>
    </div>
  );
}

Portfolio.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Portfolio;
