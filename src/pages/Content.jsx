import React from 'react'
import { motion } from "framer-motion";
import {
     slideInFromLeft,
     slideInFromRight,
     slideInFromTop,
} from "../utils/motion";
import { Link } from 'react-router-dom';
import { Awards, Education, Interest, SkillsToShow, SoftSkills } from '../utils/skills';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Sphere from '../components/Animated'

const Content = () => {

     return (
          <div className='z-40'>
               <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center justify-center px-20 mt-32 w-full z-[20]"
               >
                    <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                         <motion.div
                              variants={slideInFromTop}
                              className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                         >
                         </motion.div>
                         <div></div>
                         <motion.div
                              variants={slideInFromLeft(0.5)}
                              className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[1000px] w-auto h-auto"
                         >
                              <span>
                                   I am
                                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                        {" "}
                                        SOHITH Bandreddi  {" "}
                                   </span>
                              </span>
                         </motion.div>
                         <motion.div
                              variants={slideInFromLeft(0.5)}
                              className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
                         >
                              <span>
                                   I Love
                                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                        {" "}
                                        Building Things{" "}
                                   </span>
                              </span>
                         </motion.div>
                         <div className='flex gap-16  p-2'>
                              <motion.p
                                   variants={slideInFromLeft(0.8)}
                                   className="text-lg text-gray-400 my-5 max-w-[600px]"
                              >
                                   Full Stack ML Engineer proficient in Android and Web development, adept at leveraging machine
                                   learning techniques to create innovative solutions for both platforms, driving efficiency and user
                                   satisfaction
                              </motion.p>
                              <motion.div className='hidden md:block text-orange-50 z-50 w-[50%] h-[400px] '>
                                   <Canvas className=' h-20'>
                                        <OrbitControls enableZoom={false} />
                                        <ambientLight intensity={0.2} />
                                        <directionalLight intensity={1} position={[-2, 5, 2]} />
                                        <Sphere />
                                   </Canvas>
                              </motion.div>

                         </div>
                    </div>
                    <motion.div
                         variants={slideInFromLeft(0.5)}
                         className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
                    >
                         <span>
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                   {" "}
                                   TECHNICAL SKILLS{" "}
                              </span>
                         </span>
                    </motion.div>
                    <motion.p
                         variants={slideInFromRight(0.8)}
                         className="text-lg text-gray-400 my-5 max-w-[600px]"
                    >
                         <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                              {SkillsToShow.map((skill, index) =>
                                   <div key={index} className='flex justify-center items-center p-5 px-30  border border-gray-300 rounded-md'>
                                        <li className='text-center'>{skill.name}</li>
                                   </div>)}</div>
                    </motion.p>
                    <motion.div
                         variants={slideInFromLeft(0.5)}
                         className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
                    >
                         <span>
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                   {" "}
                                   Soft SKILLS{" "}
                              </span>
                         </span>
                    </motion.div>
                    <motion.p
                         variants={slideInFromLeft(0.8)}
                         className="text-lg text-gray-400 my-5 max-w-[600px]"
                    >
                         <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1'>
                              {SoftSkills.map((skill, index) =>
                                   <div key={index} className='flex justify-center items-center p-5 px-30  border border-gray-300 rounded-md mb-5'>
                                        <li className='text-center min-w-fit w-1/6'>{skill.name}</li>
                                   </div>)}</div>
                    </motion.p>
                    <motion.div
                         variants={slideInFromLeft(0.5)}
                         className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
                    >
                         <span>
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                   {" "}
                                   EDUCATION{" "}
                              </span>
                         </span>
                    </motion.div>
                    <motion.p
                         variants={slideInFromRight(0.8)}
                         className="text-lg text-gray-400 my-5 max-w-[600px]"
                    >
                         <div className=''>
                              {Education.map((skill, index) =>
                                   <div key={index} className='flex justify-center items-center p-5 px-30  border border-gray-300 rounded-md m-2'>
                                        <li className='text-center'>{skill.name}</li>
                                   </div>)}</div>
                    </motion.p>
                    <motion.div
                         variants={slideInFromLeft(0.5)}
                         className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
                    >
                         <span>
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                   {" "}
                                   INTEREST {" "}
                              </span>
                         </span>
                    </motion.div>
                    <motion.p
                         variants={slideInFromLeft(0.8)}
                         className="text-lg text-gray-400 my-5 max-w-[600px]"
                    >
                         <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1'>
                              {Interest.map((skill, index) =>
                                   <div key={index} className='flex justify-center items-center p-5 px-30  border border-gray-300 rounded-md mb-5'>
                                        <li className='text-center min-w-fit w-1/6'>{skill.name}</li>
                                   </div>)}</div>
                    </motion.p>
                    <motion.div
                         variants={slideInFromLeft(0.5)}
                         className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
                    >
                         <span>
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                   {" "}
                                   AWARDS{" "}
                              </span>
                         </span>
                    </motion.div>
                    <motion.p
                         variants={slideInFromRight(0.8)}
                         className="text-lg text-gray-400 my-5 max-w-[600px]"
                    >
                         <div className=''>
                              {Awards.map((skill, index) =>
                                   <div key={index} className='flex justify-center items-center p-5 px-30  border border-gray-300 rounded-md m-2'>
                                        <li className='text-center'>{skill.name}</li>
                                   </div>)}</div>
                    </motion.p>
                    <motion.div
                         variants={slideInFromRight(0.8)}
                         className="w-full h-full flex justify-center items-center"
                    >
                    </motion.div>
               </motion.div>
          </div>
     )
}

export default Content