import React from "react";
import myImage from '../public/instagram.svg';
import fb from '../public/facebook.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
     return (
          <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
               <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                    <a
                         href="#about-me"
                         className="h-auto w-auto flex flex-row items-center"
                    >
                         <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                              Sohith Bandreddi
                         </span>
                    </a>

                    <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                         <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                              <a href="#about-me" className="cursor-pointer">
                                   About me
                              </a>
                              <a href="#skills" className="cursor-pointer">
                                   Skills
                              </a>
                              <Link to="/projects" className="cursor-pointer">
                                   Projects
                              </Link>
                         </div>
                    </div>

                    <div className="flex flex-row gap-5">
                         <img src="https://www.svgrepo.com/show/353655/discord-icon.svg" width={24} height={24} alt="img1" />
                         <img src={myImage} width={24} height={24} alt="img1" />
                         <img src={fb} width={24} height={24} alt="img1" />
                    </div>
               </div>
               <style jsx>{`
                    @media (max-width: 768px) {
                         .px-10 {
                              /* Adjust padding for smaller screens */
                              padding-left: 5px;
                              padding-right: 5px;
                         }
                    }
               `}</style>
          </div>
     );
}
export default Navbar;
