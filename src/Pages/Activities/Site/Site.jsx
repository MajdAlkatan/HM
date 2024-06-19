import './Site.css'
import activity_imag from '../../../assets/activities.svg'
import { Statistics5 } from '../../../Components/index'
import Head2 from '../../../Components/Head/Head2';
import { useNavigate } from 'react-router-dom';

function Site() {
    let navigate = useNavigate();

    const goToAddTrip = () => {
      navigate('/add_trip'); 
    };
    const goToAddSite = () => {
      navigate('/add_site'); 
    };
  return (
    <div>
        
        <Head2
      image={activity_imag}
      Title='Hotels Dashboard' 
      subTitle='Here’s what’s going on at your business right now'
      titleButton1='Add Trip'
      titleButton2='Add Site'
      onClickNavigation2={goToAddSite}
      onClickNavigation={goToAddTrip}
    />
  
    <div className="statistics">
        <Statistics5/>
      
    </div>
    </div>
  )
}

export default Site