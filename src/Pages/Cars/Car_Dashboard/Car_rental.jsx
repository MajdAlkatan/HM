import './Car_rental.css'
import Head1 from './../../../Components/Head/Head1'
import { Portfolio, Statistics4, Statistics2, Statistics3, Statistics1 } from '../../../Components/index'
import s3 from '../../../assets/Car_rental2.jpg'
import s4 from './../../../assets/Car_rental.svg'
import { useNavigate } from 'react-router-dom';

function Car_rental() {
    let navigate = useNavigate();

    const goToAddCar = () => {
      navigate('/add_car'); 
    };
    return (
        <div>
  <Head1
     image={s4}
     Title='Car Rental' 
     subTitle='Here’s what’s going on at your business right now'
     titleButton1='Add Car'
     onClickNavigation={goToAddCar}/>      
           <Portfolio image={s3} />
            <div className='statistics'>
                <Statistics1 />
                <Statistics2 />
                <Statistics3 />
                <Statistics4 />
            </div>
        </div>
    )
}

export default Car_rental