
import React from "react";

const Bilboard = () => {
  return (
    <div className="w-full my-12 px-[70px] flex flex-col  gap-5 md:flex-row h-[550px] bg-black rounded-xl  items-center justify-between">
      <div className="w-[100%] md:w-[50%] flex flex-col mt-12  gap-5 items-center justify-center text-center">
        <h1 className="text-3xl font-Courgette text-red-500  ">Lorem Ipsum<br/> <br/> <span className="font-Roboto tracking-wider text-5xl text-white">Welcome</span></h1>
        <p className="font-Montserrat mt-12 text-gray-400 text-[15px] md:w-[100%] w-[200px]  text-center">
        Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.
        onec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet
        </p>
      </div>
      <div className=" flex items-center md:w-[550px] w-[200px] justify-center">
          <img src="/images/macbook.jpg" alt="hero" className=" rounded-md shadow-xl mt-5  "/>
        </div>
    </div>
  );
};

export default Bilboard;
