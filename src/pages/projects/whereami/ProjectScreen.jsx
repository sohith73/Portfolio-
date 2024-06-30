import React from 'react'
import NavProject from '../../../components/NavProject';
import { motion } from "framer-motion";
import {
     slideInFromLeft,
     slideInFromRight,
     slideInFromTop,
} from "../../../utils/motion";
// import * from "../../../components/NavProject"
import { SparklesIcon } from "@heroicons/react/24/solid";

const ProjectScreen = () => {
     return (
          <body
               className={`bg-[#030014] overflow-y-scroll overflow-x-hidden`}
          ><div className='bg-[#030014] w-full h-full inset-0 z-[20]'>
                    <NavProject title={'Where am I?'} />
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
                                   <h1 className="Welcome-text text-sm">Where am I?</h1>
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
                                                  Where am I?
                                             </span>
                                        </motion.div>
                                        <motion.p
                                             variants={slideInFromLeft(0.8)}
                                             className="text-base md:text-lg text-gray-400 my-5"
                                        >
                                             "Where am I?" is a CNN project developed during my 3rd year of B.Tech in early 2023. Using Python, Keras, Flask, and TensorFlow, it identifies locations from over 3000 images. Achieving 92% accuracy, this project explores deep learning, with future potential in classifying satellite and drone images.
                                        </motion.p>
                                        
                                   </div>
                                   <div className="w-full md:w-1/2">
                                        <motion.div className="z-50 text-blue-50 font-semibold">
                                             <motion.p className="text-sm md:text-base"
                                                  variants={slideInFromRight(1.0)}>
                                                  <ul >Excited to share my journey with you all!</ul>
                                                  <li>"Where am I?" is my first CNN project.</li>
                                                  <li>Developed during my 3rd year of B.Tech in early 2023.</li>
                                                  <ul>The X(BSC) factor:</ul>
                                                  <li>first time working with large images dataset and used power of CNN's </li>
                                                  <li>all format images are supported. "So you don't need to worry when you lost the way"</li>
                                                  <ul>Project Aim:</ul>
                                                  <li>Helps users identify their location using Convolutional Neural Networks (CNNs).</li>
                                                  <li>Built with Python, Keras, Flask, and TensorFlow.</li>
                                                  <li>To identify where are you using the image you gave it.</li>
                                                  <ul>Dataset:</ul>
                                                  <li>Used over6000 images from the Intel image dataset.</li>
                                                  <li>Images include buildings, forests, glaciers, mountains, seas, and streets.</li>
                                                  <ul>Methodology:</ul>
                                                  <li>Imported necessary modules.</li>
                                                  <li>Converted images to numpy arrays.</li>
                                                  <li>Performed training-testing splits and normalization.</li>
                                                  <ul>Training:</ul>
                                                  <li>Trained the model for nearly 700 epochs with a batch size of 128.</li>
                                                  <li>Achieved an accuracy of 95%.</li>
                                                  <ul>Future Scope:</ul>
                                                  <li>Potential applications in classifying satellite and drone images.</li>
                                                  <li>Can help organize large image repositories like Google's.</li>
                                                  <ul>Conclusion:</ul>
                                                  <li>This project was an in-depth exploration into deep learning.</li>
                                                  <li>Resulted in accurate predictions.</li>
                                                  <li>Sets the stage for future innovations in the field.</li>
                                                  <li>Stay tuned for more updates and exciting developments!</li>
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