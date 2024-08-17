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
                    <NavProject title={'NXT Sequence finder '} />
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
                                   <h1 className="Welcome-text text-sm">NXT Sequence finder</h1>
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
                                                  src="https://www.youtube.com/embed/w2d5Upt3lgY?si=-tjeKtvlQ4N1IY1D?autoplay=1"
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
                                             NXT Sequence finder
                                             </span>
                                        </motion.div>
                                        <motion.p
                                             variants={slideInFromLeft(0.8)}
                                             className="text-base md:text-lg text-gray-400 my-5"
                                        >
                                             I&apos;m a tech innovator, crafting tomorrow's digital realms. Specializing in full stack web, React Native, Android, and AI development for pioneering solutions.
                                        </motion.p>
                                        <motion.p
                                             variants={slideInFromLeft(0.8)}
                                             className="text-base md:text-lg text-gray-400 my-5"
                                        >
                                             I&apos;m a tech innovator, crafting tomorrow's digital realms. Specializing in full stack web, React Native, Android, and AI development for pioneering solutions.
                                        </motion.p>
                                   </div>
                                   <div className="w-full md:w-1/2">
                                        <motion.div className="z-50 text-blue-50 font-semibold">
                                             <motion.p className="text-sm md:text-base"
                                                  variants={slideInFromRight(1.0)}>
                                                  Excited to share my journey with you all! Introducing my first CNN project,
                                                  "Where am I?" developed during my 3rd year of B.Tech in early 2023.
                                                  This project aims to help users identify their location using CNNs with
                                                  Python, Keras, Flask, and TensorFlow. Utilizing a dataset of over 3000+
                                                  images of buildings, forests, glaciers, mountains, seas, and streets from
                                                  the Intel image dataset, we tackled multi-class classification. The process
                                                  involved importing modules, converting images to numpy arrays, performing 
                                                  training-testing splits, and normalization. After training the model with 
                                                  nearly 700 epochs and a batch size of 128, we achieved an impressive 92% 
                                                  accuracy. The future scope includes potential applications in classifying 
                                                  satellite and drone images and organizing large repositories like Google's. 
                                                  This project was a deep dive into deep learning, leading to accurate 
                                                  predictions and paving the way for future innovations. Stay tuned for more 
                                                  updates and exciting adventures in deep learning!
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