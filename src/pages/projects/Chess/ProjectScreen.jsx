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
                    <NavProject title={'Chess Bot'} />
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
                                   <h1 className="Welcome-text text-sm">Chess Bot</h1>
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
                                                  Chess Bot
                                             </span>
                                        </motion.div>
                                        <motion.p
                                             variants={slideInFromLeft(0.8)}
                                             className="text-base md:text-lg text-gray-400 my-5"
                                        >
                                             Challenge your inner chess master with my Python chess app!  This brainy program lets you test your skills against a cunning AI opponent.  The AI uses clever tactics to outsmart you, making every game exciting.  Whether you're a seasoned player or just starting out, this app is perfect for sharpening your chess skills and having some strategic fun!
                                        </motion.p>
                                   </div>
                                   <div className="w-full md:w-1/2">
                                        <motion.div className="z-50 text-blue-50 font-semibold">
                                             <motion.p className="text-sm md:text-base"
                                                  variants={slideInFromRight(1.0)}>
                                                  <ul>Chess  application : </ul>
                                                  <li>very good implementation of Q* </li>
                                                  <li>very challenge project and interesting one implemented all features which are need for a chess game</li>
                                                  <ul>The X(BSC) factor:</ul>
                                                  <li>Micro service architecture</li>
                                                  <li>Python servers for ML models</li>
                                                  <ul>Project Aim:</ul>
                                                  <li>TO implement a good UI for this ed TEch platform</li>
                                                  <li>Implementing ML models and seamless integration with Frontend </li>
                                                  <ul>Future Scope:</ul>
                                                  <li>we cam make it as a start up as an edTech platform</li>
                                                  <li>each ml model is a separate scope</li>
                                                  <ul>Conclusion:</ul>
                                                  <li>This project was build with the power of python, java and javascript.</li>
                                                  <li>and my 1st very big project and i like this very much and nothing to say  </li>
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