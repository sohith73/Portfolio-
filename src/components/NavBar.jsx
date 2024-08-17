import React from "react";
import { Link } from "react-router-dom";
import github from "../public/github-color.svg"

const Navbar = () => {
     return (
          <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50  px-10">
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
                         <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 z-50">
                              <Link to='/xyz' className="cursor-pointer hover:cursor-grabbing">
                                   About me
                              </Link>
                              <a href="#skills" className="cursor-pointer">
                                   Skills
                              </a>
                              <Link to="/projects" className="cursor-pointer">
                                   Projects
                              </Link>
                         </div>
                    </div>
                    <div className="flex flex-row gap-0 md:gap-5">
                         <Link to='https://www.linkedin.com/in/sohith-bandreddi/'><img src="https://www.svgrepo.com/show/448234/linkedin.svg" width={28} height={28} alt="LinkedIn Logo" /></Link>
                         <Link to='https://github.com/sohith73'><img src={github} width={28} height={28} className="hidden md:block" alt="img1" /></Link>
                         {/* <Link to='https://discord.gg/6rmwgeWjsx'><img src="https://www.svgrepo.com/show/353655/discord-icon.svg" width={25} height={25} alt="img1" /></Link> */}
                         <Link to='https://discord.gg/6rmwgeWjsx'><img src="https://www.svgrepo.com/show/353655/discord-icon.svg" className="hidden md:block w-6 h-6 md:w-7 md:h-7" alt="Discord Logo" /></Link>
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
