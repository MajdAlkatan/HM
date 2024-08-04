import './Tours.css'
import image from '../../../assets/image_profile.svg'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { User } from '../Site/Site_Page'
function FavouritPage() {
  const dispatch=useDispatch()
  const Data=useSelector(state=>state.site?.user)
  console.log(Data)
  useEffect(()=>{
dispatch(User())
  },[dispatch])

  return (
    <div className='favourit'>
        <div className='prof'>
      <img src={image} alt="" />
      <h1>hazem abu zaid </h1>
      </div>
      <div className='date'>
      <span>24/5/2024</span>

      </div>

    </div>
 
  )
}

export default FavouritPage
