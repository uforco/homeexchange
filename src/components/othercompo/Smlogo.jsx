import logo from "../../assets/houselogo.png";
const Smlogo = () => {
  return (
    <div className=" flex justify-start gap-1 items-center ">
      <img className=" w-7 " src={logo} alt="" />
      <span className=" font-playfairDisplay text-xl font-semibold italic ">
        Home Exchange
      </span>
    </div>
  );
};

export default Smlogo;
