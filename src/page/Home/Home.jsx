import Bannerhero from '../../components/home_components/Bannerhero';
import Ab_header from '../../components/about_components/ab_header/Ab_header';
import How_work_service from '../../components/home_components/Howworkservice';
import Event_place_exchange from './../../components/home_components/Event_place_exchange';
import Fastest_exchange_place_City from './../../components/home_components/Fastest_exchange_place_City';
import Our_Customers_Say from './../../components/about_components/ab_header/Our_Customers_Say';

const Home = () => {

    return (
        <div>
             <Bannerhero ></Bannerhero>
             <How_work_service></How_work_service>
             <Ab_header></Ab_header>
             <Event_place_exchange></Event_place_exchange>
             <Fastest_exchange_place_City></Fastest_exchange_place_City>
             <div className=' bg-lime-400 w-full h-60 ' ></div>
             <Our_Customers_Say></Our_Customers_Say>
        </div>
    );
};

export default Home;