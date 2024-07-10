import './UserProfile.css';
import PropTypes from "prop-types";

function UserProfile({ images }) {
    return (
        <div className="user_block">
            <div className='grid'>
                {images.map((imageUrl, index) => (
                    <div key={index} className="avatar"> {/* Added key prop for better performance */}
                        <img src={imageUrl} alt={`Profile Picture ${index}`}  className='img'/> {/* Use imageUrl here */}
                        <h4>Username</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Corrected prop types definition
UserProfile.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default UserProfile;
