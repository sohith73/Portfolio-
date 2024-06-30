import React from 'react'
import { motion } from "framer-motion";
import {
     slideInFromLeft,
     slideInFromRight,
     slideInFromTop,
} from "../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import image from '../public/mainIconsdark.svg'
import img from '../images/IMG_20240524_092307.png'
import { Link } from 'react-router-dom';

const HeroContent = () => {
     return (
          <motion.div
               initial="hidden"
               animate="visible"
               className="flex flex-row items-center justify-center px-20 mt-32 w-full z-[20]"
          >
               <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                    <motion.div
                         variants={slideInFromTop}
                         className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    >
                         <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                         <h1 className="Welcome-text text-[13px]">
                              Fullstack Developer Portfolio
                         </h1>
                    </motion.div>
                    <motion.div
                         variants={slideInFromLeft(0.5)}
                         className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[1000px] w-auto h-auto"
                    >
                         <span>
                              I am 
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                   {" "}
                                   SOHITH BANDREDDI  {" "}
                              </span>
                         </span>
                    </motion.div>
                    <motion.div
                         variants={slideInFromLeft(0.5)}
                         className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
                    >
                         <span>
                         Innovating Tomorrow's 
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                   {" "}
                                   Digital{" "}
                              </span>
                              Tech Landscape.
                         </span>
                    </motion.div>
                    <motion.p
                         variants={slideInFromLeft(0.8)}
                         className="text-lg text-gray-400 my-5 max-w-[600px]"
                    >
                         I&apos;m a tech innovator, crafting tomorrow's digital realms. Specializing in full stack web, React Native,Android and AI development for pioneering solutions.
                    </motion.p>
                    <Link to='/projects'><motion.a
                         variants={slideInFromLeft(1)}
                         className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-max p-8"
                    >
                         <motion.span variants={slideInFromLeft(0.8)} class="hidden sm:hidden lg:inline md:inline">Discover My Creative Digital Universe</motion.span>
                         <motion.span variants={slideInFromLeft(0.8)} class="sm:hidden lg:inline">Projects!</motion.span>
                    </motion.a></Link>
               </div>
               <motion.div
                    variants={slideInFromRight(0.8)}
                    className="w-full h-full flex justify-center items-center"
               >
                    <img
                         src={image}
                         alt="work icons"
                         height={550}
                         width={550}
                         className='opacity-50'
                    />
               </motion.div>
          </motion.div>
     )
}

export default HeroContent