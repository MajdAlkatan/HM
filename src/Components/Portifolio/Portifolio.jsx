import './Portifolio.css'
import s1 from './../../../assets/shuffle-01.jpg'
function Portifolio() {
  return (
    <div className='porifolio'>
      <div className='cards'>
        <div className='card'>
        <img src={s1} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portifolio
