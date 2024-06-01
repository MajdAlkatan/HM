import { Dialog } from '@mui/material'
import './Add_Car.css'
import ImageInput from '../../../Components/input/imageinput/imageinput'
import Inputs from '../../../Components/input/normalinput/inputs'
import PriceInput from '../../../Components/input/PriceInput/PriceInput'
import { useState } from 'react'

const Add_Car = () => {
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
    <Dialog open={true} className='dialog'>
    <div className='add_rentalcar'>
    <div  className="upload-image">
        <ImageInput/>
        </div>  
        <div className='grid-container'>
        <Inputs placeholder='number of car' type="number"/>
        <Inputs placeholder='Car Type' type="text"/>
         <PriceInput/>
         <div className="coolinput">
     <label htmlFor="input" className="text">Location</label>

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
      <div className="reviews">
        <span className="tag">with Driver :</span>

        <label>
          <input
            className="inputs"
            type="checkbox"
            value="Option 1"
            onChange={handleCheckboxChange} 
          />{" "}
          </label>
        </div>
        </div>
    </Dialog>
  )
}

export default Add_Car
