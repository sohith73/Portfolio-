import React from 'react'
import NavProject from '../../../components/NavProject';
import { motion } from "framer-motion";
import {
     slideInFromLeft,
     slideInFromRight,
     slideInFromTop,
} from "../../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const ProjectScreen = () => {
     return (
          <body
               className={`bg-[#030014] overflow-y-scroll overflow-x-hidden`}
          ><div className='bg-[#030014] w-full h-full inset-0 z-[20]'>
                    <NavProject title={'TIC TAC TOE'} />
                    <motion.div
                         initial="hidden"
                         animate="visible"
                         className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between px-4 md:px-20 mt-16 md:mt-32 w-full z-50"
                    >
                         <div className="flex flex-col gap-5 justify-center md:justify-start m-auto md:m-0 text-start w-full md:w-full h-full">
                              <motion.div
                                   variants={slideInFromTop}
                                   className="Welcome-box py-2 px-2 border border-[#7042f88b] opacity-90"
                              >
                                   <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
                                   <h1 className="Welcome-text text-sm">TIC TAC TOE</h1>
                              </motion.div>
                              <div className="flex flex-col md:flex-row gap-10">
                                   <div className="w-full md:w-1/2">
                                        <motion.div
                                             variants={slideInFromLeft(0.5)}
                                             className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white"
                                        >
                                             <iframe
                                                  width="100%"
                                                  height="315"
                                                  src="https://www.youtube.com/embed/HtAkUk9atlM?si=zfMip9lKheb4u2gr?autoplay=1"
                                                  title="BSC's player "
                                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
                                                  referrerPolicy="strict-origin-when-cross-origin"
                                                  allowFullScreen
                                             ></iframe>
                                        </motion.div>
                                        <motion.div
                                             variants={slideInFromLeft(0.5)}
                                             className="flex flex-col gap-6 mt-6 text-3xl md:text-5xl font-bold text-white"
                                        >
                                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                                  TIC TAC TOE
                                             </span>
                                        </motion.div>
                                        <motion.p
                                             variants={slideInFromLeft(0.8)}
                                             className="text-base md:text-lg text-gray-400 my-5"
                                        >
                                             Ready for a Tic Tac Toe challenge? My Python app brings the classic game to life with a twist - a super smart AI opponent!  Play against the computer and see if you can outsmart it.  This fun and user-friendly app uses clever tactics to keep you on your toes. So grab a friend or test your skills solo - Tic Tac Toe fun awaits!
                                        </motion.p>
                                   </div>
                                   <div className="w-full md:w-1/2">
                                        <motion.div className="z-50 text-blue-50 font-semibold">
                                             <motion.p className="text-sm md:text-base"
                                                  variants={slideInFromRight(1.0)}>
                                                  <ul >My TIC TAC TOE application : </ul>
                                                  <li>python based Gui application </li>
                                                  <li>very challenge game i played in childhood and i learned a power full algo in classes.</li>
                                                  <ul>The X(BSC) factor:</ul>
                                                  <li>MIN MAX algorithm with GUI  </li>
                                                  <ul>Project Aim:</ul>
                                                  <li>TO create a fully functional TIC TAC TOE game with a gui.</li>
                                                  <li>Very hard to play</li>
                                                  <ul>Future Scope:</ul>
                                                  <li>MAximum utilization of min max algo for more games</li>
                                                  <li>A game to play when free time.</li>
                                                  <ul>Conclusion:</ul>
                                                  <li>This project was build in python's GUI</li>
                                                  <li>power of min max algo </li>
                                             </motion.p>
                                        </motion.div>
                                   </div>
                              </div>
                         </div>
                         <motion.div
                              variants={slideInFromRight(0.8)}
                              className="flex-col justify-center items-center h-4"
                         >
                         </motion.div>
                    </motion.div>
               </div>
          </body>
     )
}

export default ProjectScreen