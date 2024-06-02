import './Add_Trip.css'
import { Dialog } from '@mui/material'
import Inputs from '../../../Components/input/normalinput/inputs'
import ImageInput from '../../../Components/input/imageinput/imageinput'
import PriceInput from '../../../Components/input/PriceInput/PriceInput'
import { Calendar } from 'primereact/calendar'
import { useState } from 'react'
import Footer_Dialog from './../../../Components/Footer_Dialog/Footer_Dialog'


function Add_Trip() {
  const [open, setOpen] = useState(true); 

  const handleClose = () => {
    setOpen(false);
  };
    const [dates, setDates] = useState(null); 
    const handleCalendarChange = (e) => {
        setDates(e.value);
    };
    const [guidOptions, setGuidOptions] = useState([]);
    const handleCheckboxChange = (event) => {
      if (event.target.checked) {
        setGuidOptions([...guidOptions, event.target.value]);
      } else {
        setGuidOptions(
          guidOptions.filter((option) => option !== event.target.value)
        );
      }
    };
  return (
    <Dialog open={open} scroll="paper">
    <div className='trip_container'>
        <div className='name_and_image'>
       <Inputs placeholder='Enter site name' type='text'/>
       <ImageInput/>
       </div>
       <div className='input'>
       <PriceInput/>
       <div className='calendar-container'>
        
       <label className='calendar-border-label'>Date</label>
       <Calendar value={dates} onChange={handleCalendarChange} baseZIndex={2000} selectionMode="range"/>
               
       </div>
              <Inputs placeholder='where to start the trip' type='text'/>
              <Inputs placeholder='where to end the trip' type='text'/>
              
              <Inputs placeholder='number of days' type='number'/>
              <div>
              <Inputs placeholder='Description' type='text'/>
              </div>
           

             


</div>
<div className="guid" >
        <span className="tag">with Guid </span>
       <label>
          <input
            className="inputs"
            type="checkbox"
            value="Option 1"
            onChange={handleCheckboxChange} 
          />{''}
          </label>
        </div>
        <div className='footer_dialog2'>
       <Footer_Dialog onClick1={handleClose}/>
       </div>
    </div>
   
   </Dialog>
  )
}

export default Add_Trip
