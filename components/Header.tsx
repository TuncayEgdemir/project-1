import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex flex-col   items-center justify-center mt-40">
        
          <h1 className="text-white font-Courgette  text-2xl md:text-5xl font-bold text-center">
          Welcome to
          <br />
          <br />
          <span className="text-red-500 text-4xl md:text-6xl  tracking-wider  font-Montserrat">
            My Web Site !
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
