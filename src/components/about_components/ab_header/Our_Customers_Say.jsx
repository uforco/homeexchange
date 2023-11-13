import Our_custom_card from "../../card/Our_custom_card";
const Our_Customers_Say = () => {
  const data1 = {
    title: "“The best Place swaping”",
    description:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    avatarImg: "https://i.ibb.co/Mn7hqxt/author4-1.jpg",
    avatarName: "William David",
    avatarLocation: "Los Angeles, CA",
  };
  const data2 = {
    title: "“Simply delicious”",
    description:
      "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    avatarImg: "https://i.ibb.co/QHyYjBg/author9-1.jpg",
    avatarName: "Steven Mark",
    avatarLocation: "San Diego, CA",
  };
  const data3 = {
    title: "“One of a kind restaurant”",
    description:
      "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    avatarImg: "https://i.ibb.co/wKy0cqT/author1-1.jpg",
    avatarName: "Jese Leos",
    avatarLocation: "San Francisco, CA",
  };

  return (
    <div className=" bg-base-100 ">
      <div className=" w-full mx-auto xl:container ">
        <div className=" py-24 px-4 sm:px-24 lg:px-5 flex flex-col justify-center items-center ">
          <div className=" mb-16 ">
            <h2 className=" text-center font-playfairDisplay font-bold text-5xl ">
              What Our Customers Say
            </h2>
          </div>
          <div className=" grid  md:grid-cols-2 xl:grid-cols-4  items-center gap-6 xl:gap-12 ">
            <Our_custom_card data={data1}></Our_custom_card>
            <Our_custom_card data={data2}></Our_custom_card>
            <Our_custom_card data={data3}></Our_custom_card>
            <Our_custom_card data={data2}></Our_custom_card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our_Customers_Say;
