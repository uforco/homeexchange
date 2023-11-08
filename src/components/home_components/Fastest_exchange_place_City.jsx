
import Fastest_City_left from './../othercompo/Fastest_City_left';
import Fastest_City_right from './../othercompo/Fastest_City_right';
const Fastest_exchange_place_City = () => {


    const leftsite = {
        img1 : "https://i.ibb.co/Mgpcs2S/fast-exchange1.jpg",
        img2 : "https://i.ibb.co/JCxNKPY/fast-exchange2.jpg",
        img3 : "https://i.ibb.co/TP6g8d9/fast-exchange3.jpg",
    }


    return (
        <div>
            <div className=" px-4 sm:px-5 w-full xl:container mx-auto " >
                <div className=" my-14 " >
                    <div className=" flex flex-col-reverse sm:flex-row justify-between gap-10 sm:gap-6 lg:gap-10 items-center " >
                        <div className=" sm:w-1/2 " >
                            <Fastest_City_left leftsite={leftsite} ></Fastest_City_left>
                        </div>
                        <div className=" sm:w-1/2 " >
                            <Fastest_City_right></Fastest_City_right>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fastest_exchange_place_City;