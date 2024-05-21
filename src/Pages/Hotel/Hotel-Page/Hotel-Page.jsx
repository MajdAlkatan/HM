import './Hotel-Page.css'
import Head2 from '../../../Components/Head/Head2'
import { Portfolio } from '../../../Components'
import s2 from './../../../assets/hotel-page.svg'

import {Statistics4,Statistics2,Statistics3,Statistics1} from '../../../Components'
const Hotel_Page = () => {
  return (
    <div>
           <Head2/>
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
