import React, { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from '../project Img/where am i2.png'
import {
     slideInFromRight,
     slideInFromTop,
} from '../utils/motion';


const ProjectsMain = () => {
     useEffect(() => {
          if (!sessionStorage.getItem('reloaded')) {
               sessionStorage.setItem('reloaded', 'true');
               window.location.reload();
          }
     }, [])

     return (
          <motion.div
               className="flex flex-col items-center justify-center py-20"
               id="projects"
               variants={slideInFromTop}
          >
               <motion.h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
                    variants={slideInFromRight(0.8)}>
                    My Projects
               </motion.h1>
               <motion.div className='flex-row gap-8'>
                    <motion.div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                         <Link to='/2'><ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fskhc.png?alt=media&token=c170aac9-6bd9-4d15-8eae-5236e89b0370'
                              title="SKHC"
                              description="A platform for my dad's shop and we processed over 7000+ orders from SKHC fully functional and with higher end ML models "
                         /></Link>
                         <Link to='/1'><ProjectCard
                              src={img}
                              // src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2FNotes.png?alt=media&token=094a2ad7-31cd-44b3-8b95-d657435f6f0c'
                              title="where am i"
                              description="The first CNN based on deep learning project i Developed and very close to my heart and fully functional one"
                         /></Link>
                         <Link to='/3'><ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fskillscript.png?alt=media&token=988e81a8-50f8-4770-b18e-d3dfe29f2052'
                              title="Skillscript"
                              description="The EDtECH platform i developed to test my full stack skills and while combining the ml backends and very well UI/UX and interesting one "
                         /></Link>
                    </motion.div>
                    <motion.div className="h-full mt-10 w-full flex flex-col md:flex-row gap-10 px-10">
                         <Link to='/4'><ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fcourse%20recomendation.png?alt=media&token=5fcea453-c6e4-4b5a-ba96-e9dd78063c0a'
                              title="Course Recommendation system"
                              description="A small part of the SKILLSCRIPT but very interesting one took a long time to develop and it recommend the best one on your searches and the courses highly related to your current course. "
                         /></Link>
                         <Link to='/5'><ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Ftic%20tac%20toe.png?alt=media&token=13ed80ed-711f-4dca-b46e-f6ac4f03f102'
                              title="TIC TAC TOE"
                              description="This is just testing my python skills in pyGame and how the implementation of Min Max Algo and this is the best maximum time it is a draw but i never won a single time"
                         /></Link>
                         <Link to='/6'><ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Ftofo.png?alt=media&token=37dc96e3-bb83-4e54-abe7-d2f50469d196'
                              title="TODO"
                              description="A very good UI and very use full app i use on daily basis a strong fundamentals on react native and how to add working with same api's from web app too..."
                         /></Link>
                    </motion.div>
                    <motion.div className="h-full mt-10 w-full flex flex-col md:flex-row gap-10 px-10">
                         <ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fyoutube.png?alt=media&token=2122c25f-8c05-46ce-8789-6061d622633a'
                              title="Youtube"
                              description="This is very interesting one for me i used youtube's Api's and designed the functionalities i wanted in youtube like live chat on videos and so on."
                         />
                         <ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fipl.png?alt=media&token=7fb50b70-d2d9-4351-bec6-4416d5b42da1'
                              title="IPL win predictor "
                              description="Deep learning model and very simple and good looking ui using streamlit library and prediction based on the Ground very realistic predictions"
                         />
                         <ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fnumber.png?alt=media&token=71094c7a-f332-47a1-9e42-3a55764651e5'
                              title="Number pattern finder"
                              description="Very first take on NLP take a series of numbers and predict the next series and it is very good."
                         />
                    </motion.div>
                    <motion.div className="h-full mt-10 w-full flex flex-col md:flex-row gap-10 px-10">
                         <ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fnext.png?alt=media&token=f6d68098-2ac6-4f65-847d-24f66286feea'
                              title="NXT sequence finder"
                              description="Same as above project we trained a DNN with power of NLP we developed a model which predict the next sequence and then predict the next sequence which have ......"
                         />
                         <ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fpan%20card.png?alt=media&token=df917c2e-be38-46e9-b88e-c9ba33101da7'

                              title="PanCard Tampering"
                              description="Detects whether the pan card is original or tampered helps the organization with easy kyc process"
                         />
                         <ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fflappy%20bird.png?alt=media&token=c3a25d49-3ed2-4534-9d73-1eaa17dc170e'
                              title="FlappyBird"
                              description="The 2nd game i played on mobile and very addictive game so i want to develop this once and i used the power of REACT native and game developers skills"
                         />
                    </motion.div>
                    <motion.div className="h-full mt-10 w-full flex flex-col md:flex-row gap-10 px-10">
                         <ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Femotion.png?alt=media&token=222e129e-30d9-4880-b6bd-d295cbae9c74'
                              title="Emotion Detector"
                              description="Very interesting project where we can detect people's emotions and recommend things based on their current emotions "
                         />
                         <ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fdog.png?alt=media&token=5c6c3dee-ceea-499f-8d39-be05ea8bfaae'
                              title="Dog breed predictor "
                              description="Developed a deep learning CNN model for predicting Dog's breed so we can get more insights about our pets"
                         />
                         <ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fchess%20bot.png?alt=media&token=76da7cbc-7519-4c42-bcbc-a78063351c37'
                              // src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fdiscord%20clone.png?alt=media&token=081eaef0-447e-4330-a9b3-3acdae16f880'
                              title="Chess Bot Q*"
                              description="Very interesting way to play chess i love playing chess and i learned the Q* algo so i implemented them and the result is amazing very high level bot but sometime i win with him"
                         />
                    </motion.div>
                    <motion.div className="h-full mt-10 w-full flex flex-col md:flex-row gap-10 px-10">
                         <ProjectCard
                              // src={lmg}
                              // src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Femotion.png?alt=media&token=222e129e-30d9-4880-b6bd-d295cbae9c74'
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fcrop%20rec.png?alt=media&token=f651c86c-8e28-4c0f-ae4e-c541f1146900'
                              title="Crop recommendation system"
                              description="My minor project in the college and this project i learned a-lot about felids and how we can help farmers to increase their income and the yield of their field "
                         />
                         <ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fcrop%20des.png?alt=media&token=380e334a-b738-4b6b-a947-582967545381'
                              title="Crop decease predictor"
                              description="Developed another solution for my mini project in this we will analyze the corp and say whether the crop have any decease or not both the projects combined is a perfect solution for farmers"
                         />
                         <ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fcourse%20recomendation.png?alt=media&token=5fcea453-c6e4-4b5a-ba96-e9dd78063c0a'
                              title="xxxxxxxxxxxxxxxxxxxxxxx"
                              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                         />
                    </motion.div>
                    <motion.div className="h-full mt-10 w-full flex flex-col md:flex-row gap-10 px-10">
                         <ProjectCard
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fdiscord%20clone.png?alt=media&token=081eaef0-447e-4330-a9b3-3acdae16f880'
                              title="Discord website clone"
                              description="Testing my tailwind css skills, so i developed i mean cloned the discords webpage."
                         />
                         <ProjectCard
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fblog.png?alt=media&token=e9e543ad-36f8-49bf-8fee-e3e792919dd3'
                              title="BSC's Blogs"
                              description="A Blog site of my own developed during learning fullstack and integrated some ML models into it and testing a lot of things"
                         />
                         <ProjectCard
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2Fbird.png?alt=media&token=813e5d2d-8c5d-4e0e-a7c8-7cb01142cb49'
                              title="Bird Breed predict"
                              description="CNN model for predicting the bird they are 100+ bird species in my dataset it is a very grate thing to identify the bird and learn about them them"
                         />
                         <Link to='/1'><ProjectCard
                              // src={lmg}
                              src='https://firebasestorage.googleapis.com/v0/b/guardianmessengerbsc.appspot.com/o/pot%2FNotes.png?alt=media&token=094a2ad7-31cd-44b3-8b95-d657435f6f0c'
                              title="NOTES by BSC"
                              description="A simple notes application{Web} very i learned the CURD and how to handel dynamic UI, data from backend and good practices about the backend optimizations + 1st web project i completed so close to my heart"
                         /></Link>
                    </motion.div>
               </motion.div>
          </motion.div>
     )
}

export default ProjectsMain