import "./Tours.css";
import activity_imag from "../../../assets/activities.svg";
import { Statistics5 } from "../../../Components/index";
import Head3 from "../../../Components/Head/Head3";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Favourite, TourPage } from "../Site/Site_Page";
import { useEffect } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tour() {
  let navigate = useNavigate();
  const params = useParams();

  const goToAddTrip = () => {
    navigate(`/delete/${params.id}`);
  };
  const goToAddSite = () => {
    navigate(`/tour/${params.id}/addSites`);
  };
  const goToAddTicket = () => {
    navigate(`/tour/${params.id}/add-ticket`);
  };
  const goToAddTags = () => {
    navigate(`/tour/${params.id}/add_tags/${params.id}`);
  };
 const  goTofav=()=>{
navigate(`/tour/${params.id}/favourit`)
  }
  const Data = useSelector((state) => state.site.tour);
  const Fav = useSelector((state) => state.site.fav);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TourPage(params.id));
  }, [dispatch, params.id]);
  useEffect(() => {
    dispatch(Favourite(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="hh">
      <Head3
        image={activity_imag}
        Title={Data.name}
        subTitle="Here’s what’s going on at your business right now"
        titleButton1="Delete Tour"
        titleButton2="Add Sites"
        titleButton3="Add Ticket"
        titleButton4="Add Tags"
        onClickNavigation4={goToAddTags}
        onClickNavigation2={goToAddSite}
        onClickNavigation={goToAddTrip}
        onClickNavigation3={goToAddTicket}
      />
      <div className="images-container">
        {Data.photos && Data.photos.length > 0 ? (
          Data.photos.map((photo, index) => (
            <img key={index} src={photo.image} alt={`Photo ${index + 1}`} />
          ))
        ) : (
          <p>No photos available</p>
        )}
      </div>{" "}
      <hr className="hr" />
      <div className="Detailses">
        <div className="details">
          <span>Name:{Data.name}</span>
          <span>
            description : <span className="g">{Data.description}</span>{" "}
          </span>
          <span>raw :{Data.address?.raw}</span>
          <span>street_number :{Data.address?.street_number}</span>
          <span>route:{Data.address?.route}</span>
          <div className="icon-number-container">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "red", width: "30px", height: "30px" }}
            />
            <h1 onClick={goTofav}>{Fav.count}</h1>
          </div>
        </div>
        <hr className="hr1" />

        <Statistics5 />
      </div>
    </div>
  );
}

export default Tour;
