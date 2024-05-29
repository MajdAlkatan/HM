import './Car_rental.css'
import CarrentalHead from '../../Components/Head/CarrentalHead'
import { Portfolio, Statistics4, Statistics2, Statistics3, Statistics1 } from '../../Components/index'
import s3 from '../../assets/Car_rental2.jpg'
function Car_rental() {
    return (
        <div>
            <CarrentalHead />
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