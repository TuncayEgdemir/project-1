import Main from "@/components/Bilboard";
import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-3  bg-black">
      <div className="relative w-full justify-center items-center h-[500px] md:h-screen bg-[url('/images/background.jpg')]   bg-no-repeat bg-center bg-fixed bg-cover ">
        <div className="flex flex-col">
          <Header />
        </div>
      </div>
      <div className="flex px-12 justify-center h-screen items-center w-full bg-black ">
        <Main />
      </div>

      <div className="flex px-12 justify-center h-[300px]  items-center w-full bg-[url('/images/bg-intro-01.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
        <Discover />
      </div>

      <div className="flex justify-center h-[300px] mt-12       w-full  bg-no-repeat bg-center bg-fixed bg-cover ">
          <Footer /> 
      </div>
    </div>
  );
}
