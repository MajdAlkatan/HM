import './Activities.css'
import s3 from './../../../assets/activities.svg'
import Head2 from './../../../Components/Head/Head2'
import {  Portfolio, Statistics1, Statistics2, Statistics3, Statistics4 } from './../../../Components'
import { useNavigate } from 'react-router-dom';

const Activities = () => {
    
  let navigate = useNavigate();

  const goToAddSite = () => {
    navigate('/add_site'); 
  };
  const goToAddTrip = () => {
    navigate('/add_trip'); 
  };
  return (
    <div>
             <Head2 
             image={s3} 
             Title='Activities Dashboard' 
             subTitle='Here’s what’s going on at your business right now'
             titleButton1='Add Site'
             titleButton2='Add Trip'
             onClickNavigation2={goToAddTrip}
             onClickNavigation={goToAddSite}

             />
     <Portfolio image={s3}/>
      <div className='statistics'>
      <Statistics1 />
      <Statistics2 />
      <Statistics3 />
      <Statistics4/>
      </div>
    </div>
  )
}

export default Activities
