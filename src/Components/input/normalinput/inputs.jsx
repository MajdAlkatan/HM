import './inputs.css'; 
import PropTypes from 'prop-types'; 
const Inputs = ({placeholder,type,on_change}) => { 
  return (
    <div>
      <div className="coolinput">
        <label htmlFor="input" className="text">{placeholder}</label>
        <input type={type} onChange={on_change}  name="input" className="input"/>
        </div>
      <div/> 
    </div>
  );
}
Inputs.propTypes = {
    placeholder: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    on_change:PropTypes.func.isRequired

  };
export default Inputs; 
