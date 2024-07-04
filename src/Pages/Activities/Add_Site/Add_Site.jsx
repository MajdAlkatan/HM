import './Add_Site.css'
import { Dialog } from '@mui/material'
import Inputs from '../../../Components/input/normalinput/inputs'
import ImageInput from '../../../Components/input/imageinput/imageinput'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer_Dialog from './../../../Components/Footer_Dialog/Footer_Dialog'
import { addSite } from './Add_SiteSlice'

function Add_Site() {
  const [photo, setPhoto] = useState(null); 
  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [address, setAddress] = useState(''); 
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true); 
  let navigate = useNavigate();


  const handleClose = () => {
    setOpen(false);
    navigate('/activities'); 
    
    
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit called");

    console.log(

      name,
        photo,
       address,
        description,
    );
    dispatch(
      addSite({
      
        name,
        photo,
       address,
        description,
      
        
      })
    );
  };

  return (
   <Dialog open={open} onClose={handleClose}>
    
    <div className='site_container'>
    
        <div className='name_and_image'>
       <Inputs placeholder='Enter site name' type='text' onChange={(e)=>setName(e.target.value)}/>
       <ImageInput onFilesSelected={(e)=>setPhoto(e.target.files[0])}/>
       </div>
       <div className='inputss'>
<Inputs type='text' placeholder='description' onChange={(e)=>setDescription(e.target.value)}/>
<Inputs type='text' placeholder='address' onChange={(e)=>setAddress(e.target.value)}/>

       </div>

       <div className='footer_dialog'>
       <Footer_Dialog onClick1={handleClose} onClick2={handleSubmit}/>
       </div>
    
  
     
    </div>
 
   </Dialog>
  )
}

export default Add_Site
