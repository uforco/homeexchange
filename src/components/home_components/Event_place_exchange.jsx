import Event_place_card from "../card/Event_place_card";

const Event_place_exchange = () => {

    const infodata1 = {
        img: "https://i.ibb.co/jvyZQdV/event-place5.jpg" ,
        title: "EventHub Exchange",
        descrip: "Swap stunning event venues effortlessly. Connect with EventHub Exchange for seamless exchanges and unforgettable spaces for every occasion."
    }
    const infodata2 = {
        img: "https://i.ibb.co/V38QnR5/event-place3.jpg" ,
        title: "VenueSwap Connect",
        descrip: "Transform events with ease. VenueSwap Connect links you to unique spaces, fostering memorable experiences through seamless venue exchanges."
    }
    const infodata3 = {
        img: "https://i.ibb.co/j5KC5BC/event-place4.jpg" ,
        title: "EventVenue Switch",
        descrip: "Elevate events with EventVenue Switch. Exchange premium event spaces hassle-free, ensuring unforgettable gatherings in uniquely curated environments."
    }
    const infodata4 = {
        img: "https://i.ibb.co/2FqLHnc/event-place2.jpg" ,
        title: "SpaceShift Exchange",
        descrip: "Redefine your events. SpaceShift Exchange effortlessly connects you to unique venues, facilitating seamless exchanges for unforgettable, tailored experiences."
    }


    return (
        <div className=" w-full bg-slate-50 py-14 " >
            <div className="  px-5 lg:px-8  lg:container mx-auto  " >
                <div className=" pb-10 " >
                    <div className=" w-full sm:w-[400px] " >
                        <h2 className=" font-playfairDisplay  text-2xl sm:text-4xl font-bold " >We also offer unique Services for your events</h2>
                    </div>
                </div>
                <div className=" w-full flex justify-center items-center " >
                    <div>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 " >
                            <Event_place_card infodata={infodata1} ></Event_place_card>
                            <Event_place_card infodata={infodata2} ></Event_place_card>
                            <Event_place_card infodata={infodata3} ></Event_place_card>
                            <Event_place_card infodata={infodata4} ></Event_place_card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event_place_exchange;