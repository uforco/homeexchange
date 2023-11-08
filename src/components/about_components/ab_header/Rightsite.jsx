import { Link } from 'react-router-dom';
const Rightsite = () => {
  return (
    <div className=" ">
      <div className=' flex flex-col gap-10 ' >
        <h2 className=" font-playfairDisplay font-bold text-xl md:text-2xl lg:text-3xl ">
          Home Services Exchange: Connecting Homes with Trusted Professionals for Seamless Solutions
        </h2>
        <p className=' font-medium ' >
          Home Services Exchange revolutionizes the way you care for 
          your home. Connect effortlessly with a diverse network of vetted 
          professionals, ensuring your every need is met with reliability 
          and expertise. From routine maintenance to ambitious projects, 
          find skilled individuals to exchange services and elevate your 
          home experience. Our platform fosters a community of trust and 
          convenience, simplifying the process of home improvement. Say 
          goodbye to the stress of finding reliable help and embrace the 
          future of seamless home services.
        </p>
      </div>
      <div className=' py-8 ' >
        <Link>
          <button className=" p-4 px-7 rounded-full hover:border-red-600 hover:text-red-600 font-semibold border-black border ">More About Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Rightsite;
