import './Footer.css'
import imagefooter from './../../assets/footer.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <span>Copyright©2024 Pingoway Company All rights reserved.</span>
     <div className='image'>
         <img src={imagefooter} alt="" />
     </div>
    </div>
  )
}

export default Footer
