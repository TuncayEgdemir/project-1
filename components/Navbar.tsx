'use client'

import Image from "next/image";
import { useState , useCallback} from "react";
import NavbarItem from "./NavbarItem";
import MobıleMenu from "./MobileMenu";
import {FiMenu} from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/navigation";

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const router = useRouter();


    const toogleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
      }, []);

  return (
    <nav className="w-full z-40 px-5  py-5  bg-[url('/images/background.jpg')] ">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex  items-center md:text-xl text-black text-2xl font-bold">
          {/* <Image src="/images/logo.jpg" width={70} height={70} alt="logo" /> */}
          <h1 className="italic text-white">Lunar <span className="text-red-500">Eclipse</span></h1>
        </div>

        <div className="hidden md:flex gap-10 tracking-wider ">
            <NavbarItem label="Home" onClick={()=>router.push('/')} />
            <NavbarItem label="About" onClick={()=>router.push('/about')} />
            <NavbarItem label="Services" onClick={()=>router.push('/services')} />
            <NavbarItem label="Contact" onClick={()=>router.push('/contact')}/>
        </div>

        <div>
          <button className="hidden md:flex border-2 border-white px-4 py-1 rounded-md text-white hover:bg-slate-400 hover:text-white">
            Sign In
          </button>
        </div>

        <div
          onClick={toogleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
        
          <FiMenu size={30} className={`text-white   transition}  `}/>
          <MobıleMenu visible={showMobileMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
