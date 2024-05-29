import './Hotel-Page.css'
import Head1 from '../../../Components/Head/Head1'
import { Portfolio } from '../../../Components'
import s2 from './../../../assets/hotel-page.svg'
import hotel_dashboard from './../../../assets/hotel-dashboard.svg'
import { useNavigate } from 'react-router-dom';

import {Statistics4,Statistics2,Statistics3,Statistics1} from '../../../Components'
const Hotel_Page = () => {
      
  let navigate = useNavigate();

  const goToAddRoom = () => {
    navigate('/add-room'); 
  };
  return (
    <div>
     <Head1
     image={hotel_dashboard}
     Title='Hotel Name' 
     subTitle='Here’s what’s going on at your business right now'
     titleButton1='Add room'
     onClickNavigation={goToAddRoom}/>
     <Portfolio image={s2}/>
      <div className='statistics'>
      <Statistics1 />
      <Statistics2 />
      <Statistics3 />
      <Statistics4/>
      </div>
    </div>
  )
}

export default Hotel_Page
