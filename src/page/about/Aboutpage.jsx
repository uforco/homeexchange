import Ab_header from './../../components/about_components/ab_header/Ab_header';
import Our_Customers_Say from './../../components/about_components/ab_header/Our_Customers_Say';
import Ab_information from './../../components/about_components/ab_header/Ab_information';
const Aboutpage = () => {
    return (
        <div>
            <Ab_header></Ab_header>
            <Ab_information></Ab_information>
            <hr className=' mx-6 sm:mx-12 ' />
            <Our_Customers_Say></Our_Customers_Say>
        </div>
    );
};

export default Aboutpage;