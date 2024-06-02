import "./Add_Hotel.css";
import Inputs from "../../../Components/input/normalinput/inputs";
import ImageInput from "../../../Components/input/imageinput/imageinput";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import Rating from '@mui/material/Rating';
import Switch from "@mui/material/Switch";
import Service from "../../../Components/services-button/service";
import PropTypes from "prop-types";
import gym from "./../../../assets/GYM.svg";
import sauna from "./../../../assets/sauna.svg";
import massage from "./../../../assets/massage.svg";
import tv from "./../../../assets/TV.svg";
import concerts from "./../../../assets/concerts.svg";
import wifi from "./../../../assets/wi-fi.svg";
import meals from "./../../../assets/meals.svg";
import popcorn from "./../../../assets/Popcorn.svg";
import parking from "./../../../assets/car.svg";
import roomservice from "./../../../assets/room services.svg";
import pool from "./../../../assets/pool.svg";
import halls from "./../../../assets/halls.svg";
import { Dialog } from "@mui/material";
import Footer_Dialog from './../../../Components/Footer_Dialog/Footer_Dialog'


const Add_Hotel = () => {
  const [open, setOpen] = useState(true); 

  const handleClose = () => {
    setOpen(false);
  };
  const icons = [
    { key: "1", icon: gym, text: "GYM" },
    { key: "2", icon: tv, text: "TV" },
    { key: "3", icon: popcorn, text: "Cinema" },
    { key: "4", icon: meals, text: "Meals" },
    { key: "5", icon: parking, text: "Parking" },
    { key: "6", icon: wifi, text: "Wi Fi" },
    { key: "7", icon: concerts, text: "Concerts" },
    { key: "8", icon: sauna, text: "Sauna" },
    { key: "9", icon: massage, text: "Massage" },
    { key: "10", icon: halls, text: "Hall" },
    { key: "11", icon: roomservice, text: "Room services" },
    { key: "12", icon: pool, text: "Pool" },
  ];
  const [gender, setGender] = useState("female");
  const [design, setDesign] = useState("traditional");
  const [selectedValue, setSelectedValue] = useState("");
  const [reviewOptions, setReviewOptions] = useState([]);
  const [refundEnabled, setRefundEnabled] = useState(false);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleDesignChange = (event) => {
    setDesign(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setReviewOptions([...reviewOptions, event.target.value]);
    } else {
      setReviewOptions(
        reviewOptions.filter((option) => option !== event.target.value)
      );
    }
  };

  const handleToggleChange = (event) => {
    setRefundEnabled(event.target.checked);
  };
  const [value, setValue] = useState(0);

  return (
    <Dialog open={open}   className="dialog">
    <div className="add-hotel-container">
      <div className="hotel-form">
        <div className="name_hotel">
        <Inputs  type="text"  placeholder="Enter Hotel Name" />
        </div>
        <ImageInput className="upload_image" />
      </div>

      <span className="tag">Tags</span>
      
      <div className="tags">
      <div className="rate">
       <span className="number-of-star"><p>number of stars :</p></span>
      <Rating 
      color="yellow"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </div>
        <div className="radio-buttons-container">
          <span className="place">
            <p>Place :</p>
          </span>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="gender"
              name="row-radio-buttons-group"
              value={gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Mountain"
                control={<Radio />}
                label="Mountain"
              />
              <FormControlLabel value="Sea" control={<Radio />} label="Sea" />
              <FormControlLabel
                value="Down town"
                control={<Radio />}
                label="Down Town"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="radio-buttons-container">
          <span className="place">Design :</span>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="design"
              name="design-radio-group"
              value={design}
              onChange={handleDesignChange}
            >
              <FormControlLabel
                value="traditional"
                control={<Radio />}
                label="Traditional"
              />
              <FormControlLabel
                value="modern"
                control={<Radio />}
                label="Modern"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <span className="tag">Location</span>
      <div className="location">
        <select
          className="container"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="option1">Syria</option>
          <option value="option2">Eygept</option>
          <option value="option3">Iraq</option>
        </select>
        <select
          className="container"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="option1">suwayda</option>
          <option value="option2">Cairo</option>
          <option value="option3">Bagdad</option>
        </select>
        <select
          className="container"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="option1">Kanawat </option>
          <option value="option2">Al khodor</option>
          <option value="option3">Al thowra</option>
        </select>
      </div>
      <div className="reviews">
        <span className="tag">Reviews :</span>

        <label>
          <input
            className="inputs"
            type="checkbox"
            value="Option 1"
            onChange={handleCheckboxChange}
          />{" "}
          Rating
        </label>
        <label>
          <input
            className="inputs"
            type="checkbox"
            value="Option 2"
            onChange={handleCheckboxChange}
          />{" "}
          Comments
        </label>
      </div>
      <div className="refunding">
        <span className="tag">Refunding :</span>

        <Switch checked={refundEnabled} onChange={handleToggleChange} />
      </div>
      <div className="services">
        <span className="tag">The free services we provide :</span>
        <div className="services-grid">
          {icons.map((service) => (
            <Service
              key={service.key}
              icon={service.icon}
              text={service.text}
            />
          ))}
        </div>
      </div>
      <div className='footer_dialog2'>
       <Footer_Dialog onClick1={handleClose}/>
        </div>
    </div>
    </Dialog>
  );
};
Add_Hotel.propTypes = {
  isLoading: PropTypes.bool,
  handleLoadingChange: PropTypes.func,
};
Service.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
Inputs.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
export default Add_Hotel;
