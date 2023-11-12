
import Lottie from 'react-lottie';
import animationData from '../../assets/icons/Animation-addservice2.json';
import erroralt from '../../assets/icons/erroralt.json';
import Addservicefrom from './../../components/Dashbord_compo/Addservicefrom';
import Contextdata from '../../hooks/Contexthook';
import toast from 'react-hot-toast';
import axios from 'axios';

const Addservice = () => {
  const {User} = Contextdata()
  // Lottie animation system
  const defaultOptions = (e) => ( {
    loop: false,
    autoplay: true, 
    animationData: e,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  })
  
  // Add service system
  const addservicesystem = (e) => {
    e.preventDefault()
    const form = e.target
    const serviceName = form.ServiceName.value
    const servicePhoro = form.Servicephoro.value
    const servicePrice = parseInt(form.ServicePrice.value)
    const serviceAria = form.ServiceAria.value
    const serviceDescription = form.ServiceDescription.value
    const providerName = User.displayName
    const providerEmail = User.email
    const providerPhoto = User.photoURL

    console.log({serviceName, 
      servicePhoro, servicePrice, 
      serviceAria, serviceDescription, 
      providerName, providerEmail, providerPhoto
    })
    // serviceUploadtime
    const d = new Date(),
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const serviceUploadtime = months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()

    if(!serviceName){
      return toast("fill this Service Name ",{
        icon: <Lottie options={defaultOptions(erroralt)}
        height={70}
        width={70}/>
      })
    }
    if(serviceName.length > 51){
      return toast("Service Name must be max 50 characters",{
        icon: <Lottie options={defaultOptions(erroralt)}
        height={70}
        width={70}/>
      })
    }
    if(!servicePhoro){
      return toast("Set your Service Phoro Url",{
        icon: <Lottie options={defaultOptions(erroralt)}
        height={70}
        width={70}/>
      })
    }
    if(!servicePrice){
      return toast(" Add your Service Price ",{
        icon: <Lottie options={defaultOptions(erroralt)}
        height={70}
        width={70}/>
      })
    }
    if(!serviceAria){
      return toast(" Add Your Service Aria ", {
        icon: <Lottie options={defaultOptions(erroralt)}
        height={70}
        width={70}/>
      })
    }
    if(!serviceDescription){
      return toast(" Writing Your Servise Description ", {
        icon: <Lottie options={defaultOptions(erroralt)}
        height={70}
        width={70}/>
      })
    }

    const servicedel = {serviceName, 
      servicePhoro, servicePrice, 
      serviceAria, serviceDescription, 
      providerName, providerEmail, providerPhoto, UploadTime: serviceUploadtime
    }

    axios.post("/addservice", servicedel)
    .then((res) => {
      if(res.data.acknowledged){
        toast("Complete Add your Service", {
          icon: <Lottie options={defaultOptions(animationData)}
          height={50}
          width={50}/>
        })

        form.ServiceName.value = ""
        form.Servicephoro.value = ""
        form.ServicePrice.value = ""
        form.ServiceAria.value = ""
        form.ServiceDescription.value = ""
      }

    })
  }
  
  return (
    <div className=" relative w-full h-full ">
        <div className=" absolute -z-10 top-0 left-0 w-full h-full overflow-hidden flex justify-center items-center " >
            <div className=" relative after:absolute after:w-full after:h-full after:left-0 after:top-0 after:content-['']  after:bg-opacity-20 after:backdrop-blur-sm " >
                <img src="https://i.ibb.co/rxGwM85/undraw-Updates-re-o5af.png" alt="" />
            </div>
        </div>
      <div className=" overflow-y-scroll scrollbar-hide w-full h-full py-10 ">
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
