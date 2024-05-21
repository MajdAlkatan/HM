import './counter.css'
import PropTypes from 'prop-types'; 


const Counter = ({placeholder}) => {

    return (
        <div>
          <div className="coolinput">
            <label htmlFor="input" className="text">{placeholder}</label>
            <input type="text"  name="input" className="input"/>
          
           </div>
           <div/> 
         </div>
      );
    }
    Counter.propTypes = {
        placeholder: PropTypes.string.isRequired, 
      };

export default Counter
