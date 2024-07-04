import './Site.css';
import activity_imag from '../../../assets/activities.svg';
import { Statistics5 } from '../../../Components/index';
import Head2 from '../../../Components/Head/Head2';
import { useNavigate } from 'react-router-dom';
import DetailsPortfolio from '../../../Components/DetailsPortfolio/DetailsPortfolio';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { SitePage } from './Site_Page';
import { useEffect } from 'react';

function Site() {
    let navigate = useNavigate();

    const goToAddTrip = () => {
      navigate('/add_trip'); 
    };
    const goToAddSite = () => {
      navigate('/add_site'); 
    };
    const Data = useSelector(state => state.site.data);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(SitePage());
    }, [dispatch]);

    return (
        <div className='hh'>
            <Head2
                image={activity_imag}
                Title={Data.name} 
                subTitle='Here’s what’s going on at your business right now'
                titleButton1='Delete Site'
                titleButton2='Edit Site'
                onClickNavigation2={goToAddSite}
                onClickNavigation={goToAddTrip}
            />
            <DetailsPortfolio images={Data} onClickNav={''}/>
            <hr className="hr" />

            <div className='Detailses'>
                <div className='details'>
                    <span>Name:{Data.name}</span>
                    <span>description : <span className='g'>{Data.description}</span> </span>
                    <span>raw :{Data.address?.raw}</span>
                    <span>street_number :{Data.address?.street_number}</span>
                    <span>route:{Data.address?.route}</span>

                </div>
                <hr className='hr1' />
                <Statistics5/>
            </div>
        </div>
    );
}

export default Site;
