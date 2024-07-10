import { useState } from 'react';
import './PriceInput.css';

const PriceInput = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('$');

  const currencies = ['$', '€', '£', '¥'];

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setDropdownVisible(false);
  };

  return (
    
   
      <div className="inputGroup">
     
        <label >Price</label>
      <input type="text" />
      
      <span className="price-icon">{selectedCurrency}</span>
        <span className="price-arrow" onClick={toggleDropdown}>&#9660;</span>
        {isDropdownVisible && (
          <ul className="dropdown-list">
            {currencies.map((currency) => (
              <li key={currency} onClick={() => selectCurrency(currency)}>
                {currency}
              </li>
            ))}
          </ul>
        )}
  </div>
  );
};

export default PriceInput;
   // <div className="price-input-wrapper">
      //   <input

      //     type="text"
      //     className="price-input"
      //     onInput={(e) => {
      //       e.target.value = e.target.value.replace(/[^0-9.]/g, '');
      //     }}
      //   />
      //           <label htmlFor=''>Price</label>

     
      // </div>