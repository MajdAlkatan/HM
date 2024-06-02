import './Add_Room.css'
import { Dialog } from "@mui/material";
import ImageInput from '../../../Components/input/imageinput/imageinput';
import Inputs from './../../../Components/input/normalinput/inputs';
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-dark-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import { useState } from 'react';

import PriceInput from '../../../Components/input/PriceInput/PriceInput';

        const Add_Room = () => {
          const [dates, setDates] = useState(null); // Initialize with null for both start and end dates

          const handleCalendarChange = (e) => {
              setDates(e.value);
          };

  return (
    
      <Dialog open={true} className='dialog'>
        
          <div className="add-room-container"  style={{position: 'relative', z_Index: 1500}}>
            <div  className="upload-image">
        <ImageInput/>
        </div>
     <div className='inputs1'>
      
     <Inputs  type="number" className="room-number" placeholder=" Rooms Number" />
     <div className="coolinput">
     <label htmlFor="input" className="text">Room type</label>

     <select
          className="select"
          value={''}
          onChange={''}
        >
          <option value="option1">{''}</option>
          <option value="option1">Family room</option>
          <option value="option2">individual room</option>
        </select>     
        </div>
        <Inputs  type="number" className="room-number" placeholder=" Beds Number" />
    </div>
    <div className='inputs2'>
    
    <PriceInput/>   
    <div className='calendar-container'>
       <label className='calendar-border-label'>Date</label>
       <Calendar value={dates} onChange={handleCalendarChange} baseZIndex={2000} selectionMode="range"/>
               
       </div>
                                
        </div>
        <span className="tag">Paid Services</span>
        <div className='inputs2'>
        <Inputs  type="text" className="room-number" placeholder="Services" />
        <PriceInput/>                           

        </div>
        </div>
        </Dialog>
     )
}

export default Add_Room
