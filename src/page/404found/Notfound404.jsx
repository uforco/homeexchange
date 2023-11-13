
import Loader from './../../components/othercompo/Loader';
import notfound from "../../assets/icons/found404.json"
const Notfound404 = () => {
    return (
        <div className=" flex justify-center items-center w-full h-screen overflow-hidden " >
            <div>
                <Loader name={notfound} wh={300} ></Loader>
            </div>
        </div>
    );
};

export default Notfound404;