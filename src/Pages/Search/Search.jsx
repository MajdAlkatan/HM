import { useEffect, useState } from 'react';
import '../../Components/Statistics3/Statistics3.css'; // Ensure this file includes styles for `.filter-button` and `.filters`
import './Search.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Search } from './SearchSlice';
import { useNavigate } from 'react-router-dom';
const SearchFilters = () => {
  const [search, setSearch] = useState('');
  const [tour__duration, setTourDuration] = useState('');
  const [tickets__price, setTicketPrice] = useState('');
  const [tour__takeoff_date, setTourTakeoffDate] = useState('');
  const [tour__takeoff_date__range, setTourTakeoffDateRange] = useState('');
  const [tour__duration__range, setTourDurationRange] = useState('00');
  const [tickets__price__range, setTicketPriceRange] = useState('00');
  const [type, setType] = useState('');
console.log(tickets__price__range)
console.log(tour__duration__range)

const dispatch=useDispatch();
const navigate=useNavigate()
const goToTourPage=(id)=>{
navigate(`/tour/${id}`)
}
const Data=useSelector(state=>{return state.search?.searcha.results})
const isLoading = useSelector(state => state.search?.loading); // Assuming your state has an isLoading flag

const handleSubmit=()=>{   
     dispatch(Search({
        search,
        tickets__price__range,
        tour__duration__range,
        tour__takeoff_date__range,
        tour__takeoff_date,
        tickets__price,
        tour__duration,
        type}));
}
useEffect(()=>{    
     console.log(Data)
},[Data])
  if (isLoading) {
    return <div>Loading...</div>; 
  }
  return (
    <div>
    <div className="search-filters">
      <div className="search-bar">
        <input type="text" placeholder="Search tours..." onChange={(e) => setSearch(e.target.value)}/>
        <button className="filter-button" onClick={handleSubmit}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      
        <div className="filters">
          <div className="filter-item">
            <label>Type</label>
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Enter location" />
          </div>
          <div className="filter-item">
            <label>Duration (Exact)</label>
            <input type="number" value={tour__duration} onChange={(e) => setTourDuration(e.target.value)} />
          </div>
          <div className="filter-item">
            <label>Duration (Range)</label>
            <input type="range" min="0" max="100" value={tour__duration__range[1]} onChange={(e) => setTourDurationRange([0, e.target.value])} />
            <span style={{color:"black"}}>{`${tour__duration__range[0]} - ${tour__duration__range[1]}`}</span>

          </div>
          <div className="filter-item">
            <label>Price (Exact)</label>
            <input type="number" value={tickets__price} onChange={(e) => setTicketPrice(e.target.value)} />
          </div>
          <div className="filter-item">
            <label>Price (Range)</label>
            <input type="range" min="0" max="1000" value={tickets__price__range[1]} onChange={(e) => setTicketPriceRange([0, e.target.value])} />
            <span style={{color:"black"}}>{`${tickets__price__range[0]} - ${tickets__price__range[1]}`}</span>
            </div>
          <div className="filter-item">
            <label>Date (Exact)</label>
            <input type="date" value={tour__takeoff_date} onChange={(e) => setTourTakeoffDate(e.target.value)} />
          </div>
          <div className="filter-item">
            <label>Date (Range)</label>
            <input type="date" value={tour__takeoff_date__range[0]} onChange={(e) => setTourTakeoffDateRange([e.target.value, tour__duration__range[1]])} />
            <input type="date" value={tour__takeoff_date__range[1]} onChange={(e) => setTourTakeoffDateRange([tour__takeoff_date__range[0], e.target.value])} />
          </div>
        </div>
      
    </div>
          <div >  
               {Data?.map((item) => (
          <div className='data' onClick={()=>goToTourPage(item.id)} key={item.id}>{item.name}</div>
        ))}</div>
</div>
  );
};

export default SearchFilters;
