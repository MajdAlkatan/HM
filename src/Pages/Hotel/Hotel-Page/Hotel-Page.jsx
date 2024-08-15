import PropTypes from 'prop-types';
import './Hotel-Page.css';
import { useParams, useNavigate  } from 'react-router-dom';
import Head2 from '../../../Components/Head/Head2';
import { Portfolio, Statistics1, Statistics2, Statistics3, Statistics4 } from '../../../Components';
import s3 from '../../../assets/hotel-dashboard.svg';
import { useDispatch } from 'react-redux';
import { deleteHotel } from './hoteldelete'; // Update path as necessary
import { Delete } from "../../../Components/index";

const Hotel_Page = ({ hotels = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const hotel = hotels.find(hotel => hotel.id === parseInt(id));

  if (!hotel) {
    return <div>Hotel not found</div>;
  }
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete the hotel ${hotel.name}?`)) {
      dispatch(deleteHotel(hotel.id));
      navigate('/hotels'); // Redirect to another page after deletion
    }
  };
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <div
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
        ></div>
      );
    }
    return stars;
  };
  const gotoaddroom = () => {
    navigate('/add-room');
  };
  return (
    <div className="hotel-page">
      <Head2
        image={s3}
        Title={hotel.name}
        subTitle={hotel.description}
        titleButton1="Add Room"
        titleButton2={""}
        onClickNavigation={gotoaddroom}
      />
      
      <div className="hotel-info">
        <div className="image-gridss">
          {hotel.photos.map((photo, index) => (
            <div key={index} className="grid-itemss">
              <img src={photo.image} alt={`hotel ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="hotel-details">
          <div className="details-grid">
            <div className="hotel-policies">
              <h3>Hotel Policies</h3>
              <p><strong>Refund Rate:</strong> {hotel.refund_rate}%</p>
              <p><strong>Upfront Rate:</strong> {hotel.upfront_rate}%</p>
            </div>
            
            <div className="guest-experience">
              <h3>Guest Experience</h3>
              <p>12-Point Gift Program {hotel.points_gift ? '✔️' : '❌'}</p>
              <p>Points Redemption {hotel.allow_points ? '✔️' : '❌'}</p>
              <p>Reviews {hotel.allow_review ? '✔️' : '❌'}</p>
            </div>
            
            <div className="ratings">
              <h3>Ratings</h3>
              <div className="star-rating">
                {renderStars(hotel.star)}
              </div>
              <p>{hotel.avg_rating ? hotel.avg_rating : '-'}</p>
              <p>{hotel.num_rating ? `${hotel.num_rating} ratings` : 'No ratings yet'}</p>
            </div>
            
            <div className="discount-container">
              <h3>Discounts</h3>
              <ul>
                {hotel.on_discount.map((discount, index) => (
                  <li key={index} className="discount-item">
                    <p><strong>{discount.event ? discount.event : 'Discount'}: </strong>{discount.percent}%</p>
                    <p>{discount.type}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Delete onClick={handleDelete} />
        <Portfolio 
          images={[{
            name: hotel.name,
            description: hotel.description,
            photos: hotel.photos
          }]} 
          onClickNav={() => {}} 
        />

        <div className="statistics">
          <Statistics1
            series1={10}
            series2={20}
            series3={30}
            series4={40}
            series5={50}
            series6={60}
            px1={2020}
            px2={2021}
            px3={2022}
            px4={2023}
            px5={2024}
            px6={2025}
          />
          <Statistics2
            value1={400}
            value2={200}
            value3={300}
            value4={500}
            label1={"Group A"}
            label2={"Group B"}
            label3={"Group C"}
            label4={"Group D"}
          />
          <Statistics3
            a1={2}
            a2={3}
            a3={4}
            a4={1}
            a5={2}
            b1={4}
            b2={4}
            b3={2}
            b4={1}
            b5={2}
            c1={5}
            c2={6}
            c3={3}
            c4={7}
            c5={1}
          />
          <Statistics4
            uv1={-15.69}
            uv2={-20.63}
            uv3={89.22}
            uv4={190.67}
            uv5={286.69}
            uv6={76.63}
            uv7={31.47}
          />
        </div>
      </div>
    </div>
  );
};

// Prop validation
Hotel_Page.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      refund_rate: PropTypes.string.isRequired,
      upfront_rate: PropTypes.string.isRequired,
      points_gift: PropTypes.number.isRequired,
      allow_points: PropTypes.bool.isRequired,
      allow_review: PropTypes.bool.isRequired,
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
        })
      ).isRequired,
      avg_rating: PropTypes.number,
      num_rating: PropTypes.number.isRequired,
      on_discount: PropTypes.arrayOf(
        PropTypes.shape({
          percent: PropTypes.string.isRequired,
          event: PropTypes.string,
          type: PropTypes.string.isRequired,
        })
      ).isRequired,
      address: PropTypes.shape({
        raw: PropTypes.string.isRequired,
      }).isRequired,
      star: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      desgen: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hotel_Page;
