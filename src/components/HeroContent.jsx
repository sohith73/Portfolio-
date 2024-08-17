import React, { Suspense } from 'react'
import { motion } from "framer-motion";
import {
     slideInFromLeft,
     slideInFromRight,
     slideInFromTop,
} from "../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber'
import { OrbitControls ,Html } from '@react-three/drei'
import { Globe } from './Globe';
const Loader = () => (
     <Html center>
          <div>Loading...</div>
     </Html>
);

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
                                   SOHITH <span className=''>BANDREDDI</span>   {" "}
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
                    <motion.div className='text-orange-50 z-50 w-[70%] h-[400px] mt-4'>
                         <Canvas className=' h-20'>
                              <Suspense fallback={<Loader />}>
                                   <OrbitControls enableZoom={false} />
                                   <ambientLight intensity={0.3333} />
                                   <directionalLight intensity={1} position={[-2, 5, 2]} />
                                   <Globe />
                              </Suspense>
                         </Canvas>
                    </motion.div>
               </motion.div>
          </motion.div>
     )
}

export default HeroContent