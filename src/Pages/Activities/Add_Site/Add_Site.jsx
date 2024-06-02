import { Dialog } from '@mui/material'
import './Add_Site.css'
import Inputs from '../../../Components/input/normalinput/inputs'
import ImageInput from '../../../Components/input/imageinput/imageinput'
import PriceInput from '../../../Components/input/PriceInput/PriceInput'
import { Calendar } from 'primereact/calendar'
import { useState } from 'react'


function Add_Site() {
  const [dates, setDates] = useState(null); // Initialize with null for both start and end dates

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
   <Dialog open={true} >
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
    </div>
   </Dialog>
  )
}

export default Add_Site
