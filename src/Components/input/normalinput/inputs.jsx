import './inputs.css'; 
import PropTypes from 'prop-types'; 
const Inputs = ({placeholder,type}) => { 
  return (
    <div>
      <div className="coolinput">
        <label htmlFor="input" className="text">{placeholder}</label>
        <input type={type}  name="input" className="input"/>
        </div>
      <div/> 
    </div>
  );
}
Inputs.propTypes = {
    placeholder: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 

  };
export default Inputs; 
