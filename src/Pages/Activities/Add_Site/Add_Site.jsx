import { Dialog } from '@mui/material'
import './Add_Site.css'
import Inputs from '../../../Components/input/normalinput/inputs'
import ImageInput from '../../../Components/input/imageinput/imageinput'
import PriceInput from '../../../Components/input/PriceInput/PriceInput'
import { Calendar } from 'primereact/calendar'
import { useState } from 'react'

import Footer_Dialog from './../../../Components/Footer_Dialog/Footer_Dialog'

function Add_Site() {
  const [open, setOpen] = useState(true); 

  const handleClose = () => {
    setOpen(false);
  };
  const [dates, setDates] = useState(null);

  const handleCalendarChange = (e) => {
      setDates(e.value);
  };
    const [reviewOptions, setReviewOptions] = useState([]);
    const handleCheckboxChange = (event) => {
      if (event.target.checked) {
        setReviewOptions([...reviewOptions, event.target.value]);
      } else {
        setReviewOptions(
          reviewOptions.filter((option) => option !== event.target.value)
        );
      }
    };
  return (
   <Dialog open={open} onClose={handleClose}>
    
    <div className='site_container'>
    
        <div className='name_and_image'>
       <Inputs placeholder='Enter site name' type='text'/>
       <ImageInput/>
       </div>
       <div className='inputs'>
<PriceInput />
<div className='calendar-container'>
       <label className='calendar-border-label'>Date</label>
       <Calendar value={dates} onChange={handleCalendarChange} baseZIndex={2000} selectionMode="range"/>
               
       </div>
</div>
<div className="Guid">
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
       <div className='footer_dialog'>
       <Footer_Dialog onClick1={handleClose}/>
       </div>
    
  
     
    </div>
 
   </Dialog>
  )
}

export default Add_Site
