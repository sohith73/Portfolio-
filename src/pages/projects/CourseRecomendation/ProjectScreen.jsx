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
                    <NavProject title={'Course Recommendation '} />
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
                                   <h1 className="Welcome-text text-sm">Course Recommendation </h1>
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
                                                  src="https://www.youtube.com/embed/A0EAoi38xYE?si=reNYP5_tcboHc9Sl"
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
                                                  Course Recommendation
                                             </span>
                                        </motion.div>
                                        <motion.p
                                             variants={slideInFromLeft(0.8)}
                                             className="text-base md:text-lg text-gray-400 my-5"
                                        >

Feeling overwhelmed by online courses? SkillSpark, created by a coding expert, makes finding the perfect course easy and fun. Using Flask and advanced algorithms, it processes vast amounts of data to provide highly accurate recommendations. With a sleek interface and 98% accuracy, SkillSpark is your personal course guru.
and this is just a small part of it.
                                        </motion.p>
                                   </div>
                                   <div className="w-full md:w-1/2">
                                        <motion.div className="z-50 text-blue-50 font-semibold">
                                             <motion.p className="text-sm md:text-base"
                                                  variants={slideInFromRight(1.0)}>
                                                  <ul>Introduction:</ul>
                                                  <li>Feeling overwhelmed by the many online courses? SkillSpark is here to help!</li>
                                                  <ul>The X factor:</ul>
                                                  <li>This is a part of a big project SkillScript</li>
                                                  <li>i learnt a lot of things in this quest how similarity scores will work</li>
                                                  <li>integrated with flask so i can use in frontend</li>
                                                  <li>very reliable dataset</li>
                                                  <ul>Quest for Learning:</ul>
                                                  <li>Feeling overwhelmed by the many online courses? SkillSpark is here to help!</li>
                                                  <ul>Technology:</ul>
                                                  <li>Uses Flask to power its course recommendation engine, making it a game-changer.</li>
                                                  <ul>How it Works:</ul>
                                                  <li>Data Delight: SkillSpark cleans and processes vast amounts of course data, showing only the best options.</li>
                                                  <li>Magic Math: Uses advanced algorithms to find patterns and similarities, providing highly accurate recommendations.</li>
                                                  <li>User-Friendly Vibes: Features a sleek, intuitive interface for easy course navigation.</li>
                                                  <ul>Journey and Accuracy:</ul>
                                                  <li>SkillSpark is a project that has overcome many challenges to ensure a 98% accuracy rate in recommendations.    </li>
                                                  <ul>Conclusion:</ul>
                                                  <li>Start your learning adventure with SkillSpark and find the perfect course with ease and confidence!</li>
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