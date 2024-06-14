import { useState, useEffect } from 'react';
import './Hotel_Dashboard.css';
// import s1 from './../../../assets/shuffle-01.jpg';
import s2 from './../../../assets/hotel-dashboard.svg';
import Head2 from './../../../Components/Head/Head2';
import { useNavigate } from 'react-router-dom';
import { Portfolio, Statistics1, Statistics2, Statistics3, Statistics4 } from './../../../Components/index';
import axios from 'axios';

const Hotel_Dashboard = () => {
  const navigate = useNavigate();
  const [portfolioItems, setPortfolioItems] = useState([]); // State to hold fetched images

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos'); // Fetching photos
        // Slice the array to get only the first 5 items
        const firstFiveItems = response.data.slice(0, 100);
        setPortfolioItems(firstFiveItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const goToAddHotel = () => {
    navigate('/add-hotel');
  };

  const goToHotelpage = () => {
    navigate("/Hotel-Page");
  };


  return (
    <div>
      <Head2
        image={s2}
        Title='Hotels Dashboard'
        subTitle='Here’s what’s going on at your business right now'
        titleButton1='Add Hotel'
        titleButton2='Delete Hotel'
        onClickNavigation={goToAddHotel}
      />
      <Portfolio images={portfolioItems.map(items => items.url)} onClickNav={goToHotelpage} captionLabel={portfolioItems.map(item => item.id)} captionText={portfolioItems.map(item => item.title)} />
      <div className='statistics'>
        <Statistics1
          series1={10}
          series2={30}
          series3={20}
          series4={50}
          series5={40}
          series6={5}
          px1={2020}
          px2={2021}
          px3={2022}
          px4={2023}
          px5={2024}
          px6={2025}
        />
        <Statistics2
          value1={400}
          value2={200}
          value3={300}
          value4={500}
          label1={'Group A'}
          label2={'Group B'}
          label3={'Group C'}
          label4={'Group D'}
        />
        <Statistics3
          a1={2}
          a2={3}
          a3={4}
          a4={1}
          a5={2}
          b1={4}
          b2={4}
          b3={2}
          b4={1}
          b5={2}
          c1={5}
          c2={6}
          c3={3}
          c4={7}
          c5={1}
        />
        <Statistics4
          uv1={-15.69}
          uv2={-50.63}
          uv3={89.22}
          uv4={190.67}
          uv5={286.69}
          uv6={76.63}
          uv7={31.47}
        />
      </div>
    </div>
  );
};

export default Hotel_Dashboard;
