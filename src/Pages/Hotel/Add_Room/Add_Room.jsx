import './Add_Room.css'
import { Dialog } from "@mui/material";
import ImageInput from '../../../Components/input/imageinput/imageinput';
import Inputs from './../../../Components/input/normalinput/inputs';
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-dark-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

        const Add_Room = () => {
          const[daterange,setdaterange]=useState(null)

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
    
        
              <Inputs  type="number" className="Price" placeholder="Price" />
              <div className='calender'>
              <Calendar baseZIndex={2000}  value={daterange} onChange={(event)=>setdaterange(event.value)}  selectionMode="range"/>
              {<FontAwesomeIcon className='iconCalender'icon={faCalendar}/>  }   
                             </div>
        </div>
        <span className="tag">Paid Services</span>
        <div className='inputs2'>
        <Inputs  type="text" className="room-number" placeholder="Services" />
        <Inputs  type="number" className="Price" placeholder="Price" />
        </div>
        </div>
        </Dialog>
      

   

  )
}

export default Add_Room
