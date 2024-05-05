import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectsMain = () => {
     return (
          <motion.div
               className="flex flex-col items-center justify-center py-20"
               id="projects"
          >
               <motion.h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                    My Projects
               </motion.h1>
               <motion.div className='flex-row gap-8'>
               <motion.div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                    <Link to='/'><ProjectCard
                         src='https://res.cloudinary.com/dcqslfpad/image/upload/v1714459346/samples/portfolio/wrjimjt08f5volx66fbw.png'
                         title="Modern Next.js Portfolio"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    /></Link>
                    <Link to='/'><ProjectCard
                         src="https://res.cloudinary.com/dcqslfpad/image/upload/v1714459549/samples/portfolio/iglmkg84oqhmx3tfkkyp.png"
                         title="Interactive Website Cards"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    /></Link>
                    <Link to='/'><ProjectCard
                         src="https://res.cloudinary.com/dcqslfpad/image/upload/v1714459549/samples/portfolio/iglmkg84oqhmx3tfkkyp.png"
                         title="Space Themed Website"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    /></Link>
               </motion.div>
               <motion.div className="h-full mt-10 w-full flex flex-col md:flex-row gap-10 px-10">
                    <ProjectCard
                         src="https://res.cloudinary.com/dcqslfpad/image/upload/v1714459346/samples/portfolio/wrjimjt08f5volx66fbw.png"
                         title="Modern Next.js Portfolio"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ProjectCard
                         src="https://res.cloudinary.com/dcqslfpad/image/upload/v1714459549/samples/portfolio/iglmkg84oqhmx3tfkkyp.png"
                         title="Interactive Website Cards"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ProjectCard
                         src="https://res.cloudinary.com/dcqslfpad/image/upload/v1714459549/samples/portfolio/iglmkg84oqhmx3tfkkyp.png"
                         title="Space Themed Website"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
               </motion.div>
               <motion.div className="h-full mt-10 w-full flex flex-col md:flex-row gap-10 px-10">
                    <ProjectCard
                         src="https://res.cloudinary.com/dcqslfpad/image/upload/v1714459346/samples/portfolio/wrjimjt08f5volx66fbw.png"
                         title="Modern Next.js Portfolio"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ProjectCard
                         src="https://res.cloudinary.com/dcqslfpad/image/upload/v1714459549/samples/portfolio/iglmkg84oqhmx3tfkkyp.png"
                         title="Interactive Website Cards"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ProjectCard
                         src="https://res.cloudinary.com/dcqslfpad/image/upload/v1714459549/samples/portfolio/iglmkg84oqhmx3tfkkyp.png"
                         title="Space Themed Website"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
               </motion.div>
               </motion.div>
          </motion.div>
     )
}

export default ProjectsMain