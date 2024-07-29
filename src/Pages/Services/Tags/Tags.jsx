import './Tags.css'
import { Dialog } from '@mui/material'
import Inputs from '../../../Components/input/normalinput/inputs'
import Footer_Dialog from '../../../Components/Footer_Dialog/Footer_Dialog'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AddTagsPage } from '../ServicesSlice'
import { useState } from 'react'
function Tags() {
  const cat_id=useSelector(state=>state.services.servicesData?.results)
  console.log(cat_id)
    const navigate=useNavigate()
    const goToServicesPage=()=>{
        navigate('/services')
    }
    const [name, setName] = useState("");
    const [contenttype, setContenttype] = useState("");
    const [category, setCategory] = useState("");

    const dispatch=useDispatch();
    const handlesubmit=()=>{
      dispatch(AddTagsPage({name,contenttype,category}))

    }
  
    const handleOptionChange = (event) => {

      const idAndName = event.target.value.split(' '); 
      const categoryId = idAndName[0]; 
      setCategory(categoryId);
      console.log(categoryId); 
    };
  return (

   <Dialog open={open}>
    <div className='add_tag '>
        <span>Add Tag</span>
    <Inputs placeholder='name' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <Inputs placeholder='description' type="text" value={contenttype} onChange={(e)=>setContenttype(e.target.value)}/>
    <div className='option'>
    <div className="coolinput">
            <label htmlFor="input" className="text">
              Choose category
            </label>
            <select
              className="select"
              onChange={handleOptionChange}
            >
            {cat_id?.map((option) => (
                <option key={option.id} value={option.id} >{option.name}</option>
              ))}

              ))
            </select>
          </div>
          </div>
    <div className='d'>
    <Footer_Dialog onClick1={goToServicesPage} onClick2={handlesubmit}/>
    </div>

    
    </div>
   
   </Dialog>
  )
}

export default Tags
