import './inputs.css'; 
import PropTypes from 'prop-types'; 
const Inputs = ({placeholder}) => { 
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
Inputs.propTypes = {
    placeholder: PropTypes.string.isRequired, // Define PropTypes
  };
export default Inputs; // Exporting the component
