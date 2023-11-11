
import Scheduleitem from './../../components/Schedule/Scheduleitem';

const Myschedule = () => {



  // !userbooklist || userbooklist?.length < 1?
  // <div className=" w-full h-[500px] overflow-hidden " >
  //     <div className=" mb-5 " >
  //         <Lottie options={defaultOptions(booking)}
  //         height={600}
  //         width={600}/>
  //     </div>
  // </div>

//   useEffect(()=>{
//     axios.get(`/myschedule?providerEmail=${User?.email}`)
//         .then(res =>{ console.log(res.data) })
//   },[])




  return (
        <div className=" px-3 w-full h-full " >
          <div className=" w-full h-full  ">
                <div className="px-1 pt-2 w-full h-full scrollbar-hide overflow-y-scroll">
                    <Scheduleitem></Scheduleitem>
                </div>
          </div>
        </div>
  );
};

export default Myschedule;
