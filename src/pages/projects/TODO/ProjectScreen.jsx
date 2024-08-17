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
                    <NavProject title={"TODO"} />
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
                                   <h1 className="Welcome-text text-sm">TODO</h1>
                              </motion.div>
                              <div className="flex flex-col md:flex-row gap-10">
                                   <div className="w-full md:w-1/2">
                                        <motion.div
                                             variants={slideInFromLeft(0.5)}
                                             className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white"
                                        >
                                             <iframe
                                             //https://youtu.be/KFLYAfNtHEM
                                                  width="100%"
                                                  height="315"
                                                  src="https://www.youtube.com/embed/KFLYAfNtHEM?si=l6qJnBlPKoR_Hxl8?autoplay=1"
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
                                                  TODO
                                             </span>
                                        </motion.div>
                                        <motion.p
                                             variants={slideInFromLeft(0.8)}
                                             className="text-base md:text-lg text-gray-400 my-5"
                                        >
                                             Ditch the forgotten to-do lists and scattered sticky notes! My brand new app lets you manage your tasks with ease, available on both web and Android.  Creating, checking off, and keeping track of your to-dos becomes a breeze, no matter where you are.  This user-friendly app keeps your life organized and on track, acting like a digital pocket notebook for all your tasks, big or small.
                                        </motion.p>

                                   </div>
                                   <div className="w-full md:w-1/2">
                                        <motion.div className="z-50 text-blue-50 font-semibold">
                                             <motion.p className="text-sm md:text-base"
                                                  variants={slideInFromRight(1.0)}>
                                                  <ul >My first cross platform application </ul>
                                                  <li>"TODO" which is in both web and android application.</li>
                                                  <li>same database and same tech stack.</li>
                                                  <ul>The X(BSC) factor:</ul>
                                                  <li>Amazing looking UI and UX </li>
                                                  <li>You can even add birthdays to it so you don't remember them </li>
                                                  <ul>Project Aim:</ul>
                                                  <li>TO create a fully functional todo list application which is accessible in both app and web form .</li>
                                                  <li>costume events too and email remainders</li>
                                                  <ul>Future Scope:</ul>
                                                  <li>Helpful in productivity</li>
                                                  <li>Can help organize to observe their employees </li>
                                                  <ul>Conclusion:</ul>
                                                  <li>This project was an in-depth of api's.</li>
                                                  <li>React native and its easy to use components.</li>
                                                  <li>helps to complete the task soon and remand the tasks.</li>
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