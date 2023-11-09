
import Lottie from 'react-lottie';
// import animationData from '../../assets/icons/Animation-addservice2.json';
import erroralt from '../../assets/icons/erroralt.json';
import Addservicefrom from './../../components/Dashbord_compo/Addservicefrom';
import Contextdata from '../../hooks/Contexthook';
import toast from 'react-hot-toast';

const Addservice = () => {

  const {User} = Contextdata()

  const addservicesystem = (e) => {
    e.preventDefault()
    console.log(e.target)
    const serviceName = e.target.ServiceName.value
    const servicePhoro = e.target.Servicephoro.value
    const servicePrice = parseInt(e.target.ServicePrice.value)
    const serviceAria = e.target.ServiceAria.value
    const serviseDescription = e.target.ServiseDescription.value
    const providerName = User.displayName
    const providerEmail = User.email
    const providerPhoto = User.photoURL

    console.log({serviceName, 
      servicePhoro, servicePrice, 
      serviceAria, serviseDescription, 
      providerName, providerEmail, providerPhoto
    })

    if(!serviceName){
      return toast("fill this Service Name ",{
        icon: <Lottie options={defaultOptions(erroralt)}
        height={70}
        width={70}/>
      })
    }
    if(serviceName.length < 31){
      return toast.error("Service Name must be max 30 characters",{
        icon: <Lottie options={defaultOptions(erroralt)}
        height={70}
        width={70}/>
      })
    }
    if(!servicePhoro){
      return toast.error("Set your Service Phoro Url",{
        icon: <Lottie options={defaultOptions(erroralt)}
        height={70}
        width={70}/>
      })
    }
    if(!servicePrice){
      return toast.error(" Add your Service Price ",{
        icon: <Lottie options={defaultOptions(erroralt)}
        height={70}
        width={70}/>
      })
    }
    if(!serviceAria){
      return toast.error(" Add Your Service Aria ", {
        icon: <Lottie options={defaultOptions(erroralt)}
        height={70}
        width={70}/>
      })
    }
    if(!serviseDescription){
      return toast.error(" Writing Your Servise Description ", {
        icon: <Lottie options={defaultOptions(erroralt)}
        height={70}
        width={70}/>
      })
    }






  }

  const defaultOptions = (e) => ( {
    loop: false,
    autoplay: true, 
    animationData: e,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  })
  
  return (
    <div className=" relative w-full h-full " >
        <div className=" hidden z-20 absolute  bg-slate-50 bg-opacity-80 justify-center items-center w-full h-full left-0 top-0 " >
            <div >
              <Lottie options={defaultOptions}
                height={100}
                width={100}/>
            </div>
        </div>
        <div className=" absolute -z-10 top-0 left-0 w-full h-full overflow-hidden flex justify-center items-center " >
            <div className=" relative after:absolute after:w-full after:h-full after:left-0 after:top-0 after:content-['']  after:bg-opacity-20 after:backdrop-blur-sm " >
                <img src="https://i.ibb.co/rxGwM85/undraw-Updates-re-o5af.png" alt="" />
            </div>
        </div>
      <div className=" overflow-y-scroll w-full h-full py-10 ">
        <div>
          <div>
            <section className=" p-6 mx-auto rounded-md ">
              <h2 className="text-3xl font-semibold text-gray-700 capitalize dark:text-white">
                Add Your Service
              </h2>
              <form onSubmit={addservicesystem} >
                <Addservicefrom></Addservicefrom>
                <div className="flex justify-end mt-6">
                  <button type="submit" className=" z-10 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none  focus:bg-gray-700">
                    Save
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addservice;
