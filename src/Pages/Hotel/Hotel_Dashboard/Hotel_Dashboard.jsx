import './Hotel_Dashboard.css'
import s1 from './../../../assets/shuffle-01.jpg'
import s2 from './../../../assets/hotel-dashboard.svg'

import Head2 from './../../../Components/Head/Head2'
import {  Portfolio, Statistics1, Statistics2, Statistics3, Statistics4 } from './../../../Components'
const Hotel_Dashboard = () => {
  return (
    <div>
     <Head2
       image={s2}
       Title='Hotels Dashboard' 
       subTitle='Here’s what’s going on at your business right now'
       titleButton1='Add Hotel'
       titleButton2='Delete Hotel'

       onClickNavigation={''}/>
     <Portfolio image={s1}/>
      <div className='statistics'>
      <Statistics1 />
      <Statistics2 />
      <Statistics3 />
      <Statistics4/>
      </div>
    </div>
  )
}

export default Hotel_Dashboard
