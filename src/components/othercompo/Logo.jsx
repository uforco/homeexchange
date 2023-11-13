import logo from "../../assets/houselogo.png";
const Logo = () => {
  return (
    <div className=" flex justify-start gap-2 items-center ">
      <img className=" w-6 sm:w-9 " src={logo} alt="" />
      <span className=" font-playfairDisplay text-xl sm:text-3xl font-semibold italic ">
        Home Exchange
      </span>
    </div>
  );
};

export default Logo;
