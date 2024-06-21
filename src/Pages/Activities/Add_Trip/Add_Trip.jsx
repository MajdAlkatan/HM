import './Add_Trip.css';
import { Dialog } from '@mui/material';
import Inputs from '../../../Components/input/normalinput/inputs';
import ImageInput from '../../../Components/input/imageinput/imageinput';
import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import Footer_Dialog from './../../../Components/Footer_Dialog/Footer_Dialog';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTour } from './Add_TripSlice'; 

function Add_Trip() {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [refund_rate, setRefundRate] = useState('');
  const [description, setDescription] = useState('');
  const [takeoff_date, setTakeoffDate] = useState('');
  const dispatch = useDispatch();
  const [optionsData, setOptionsData] = useState([]);
  const [guid_id, setGuid_Id] = useState('');
  const [allow_points, setAllowPoints] = useState('');
  const [photos, setPhotos] = useState('');

  const [open, setOpen] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/services/activities/guides/')
     .then(response => response.json())
     .then(data => setOptionsData(data));
  }, []);

  const handleClose = () => {
    setOpen(false);
    navigate('/activities');
  };



  const handleOptionChange = (event) => {
    setGuid_Id(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setAllowPoints([...allow_points, event.target.value]);
    } else {
      setAllowPoints(allow_points.filter((option) => option!== event.target.value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    dispatch(
      addTour({ name, photos, duration, refund_rate, description, takeoff_date, allow_points, guid_id })
    );
    
  };
  const handleFilesSelected = (selectedFiles) => {
    setPhotos(selectedFiles);
  };

  return (
    <Dialog open={open} scroll="paper">
      <div className='trip_container'>
        <div className='name_and_image'>
          <Inputs placeholder='Enter site name' type='text' onChange={(e) => setName(e.target.value)} />
          <ImageInput onFilesSelected={handleFilesSelected}/>
        </div>
        <div className='input'>
          <div className='calendar-container'>
            <label className='calendar-border-label'>Date</label>
            <Calendar onChange={(e) => setTakeoffDate(e.value)} baseZIndex={2000} />
          </div>
          <Inputs placeholder='number of days' type='number' onChange={(e) => setDuration(e.target.value)} />
          <Inputs placeholder='refund rate' type='number' onChange={(e) => setRefundRate(e.target.value)} />
          <Inputs placeholder='Description' type='text' onChange={(e) => setDescription(e.target.value)} />
          <div className="coolinput">
            <label htmlFor="input" className="text">Choose Guide</label>
            <select className="select" value={guid_id} onChange={handleOptionChange}>
              {optionsData.map(option => (
                <option key={option.id}>{option.name}</option>
              ))}
            </select>
          </div>
          <div className="guid">
            <span className="tag">Allow Points</span>
            <label>
              <input
                className="inputs"
                type="checkbox"
                value="Option 1"
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
          <div className='footer_dialog2'>
            <Footer_Dialog onClick1={handleClose} onClick2={handleSubmit} />
          </div>
        </div>
        </div>
      </Dialog>
    );
}

export default Add_Trip;
