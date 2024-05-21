import './Hotel_Dashboard.css'
import s1 from './../../../assets/shuffle-01.jpg'
import Head1 from './../../../Components/Head/Head1'
import {  Portfolio, Statistics1, Statistics2, Statistics3, Statistics4 } from './../../../Components'
const Hotel_Dashboard = () => {
  return (
    <div>
     <Head1/>
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
