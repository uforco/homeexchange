import Bannerhero from "../../components/home_components/Bannerhero";
import Ab_header from "../../components/about_components/ab_header/Ab_header";
import How_work_service from "../../components/home_components/Howworkservice";
import Event_place_exchange from "./../../components/home_components/Event_place_exchange";
import Fastest_exchange_place_City from "./../../components/home_components/Fastest_exchange_place_City";
import Our_Customers_Say from "./../../components/about_components/ab_header/Our_Customers_Say";
import Helmattitle from "../../components/othercompo/Helmattitle";

const Home = () => {
  return (
    <div>
      <Helmattitle title={"Home Exchage"}></Helmattitle>
      <Bannerhero></Bannerhero>
      <How_work_service></How_work_service>
      <Ab_header></Ab_header>
      <Event_place_exchange></Event_place_exchange>
      <Fastest_exchange_place_City></Fastest_exchange_place_City>
      <Our_Customers_Say></Our_Customers_Say>
    </div>
  );
};

export default Home;
