import './inputs.css';
import PropTypes from 'prop-types';

const Inputs = ({placeholder, type, onChange}) => { 

  return (
    <div>
      <div className="coolinput">
        <label htmlFor="input" className="text">{placeholder}</label>
        <input type={type}  onChange={onChange} name="input" className="input"/>
      </div>
      <div/> 
    </div>
  );
}

Inputs.propTypes = {
    placeholder: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired
};

export default Inputs;
