import s1 from '../../../assets/shuffle-01.jpg'
import './Portfolio.css'
function Portfolio() {
  return (
    <div className="portfolio">

      <div className="imgs-container">
        <div className="box">
          <img src={s1} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={s1} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={s1} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
          <img src={s1} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
      </div>
      <a href="#cd" className="more">More</a>
    </div>
  )
}

export default Portfolio