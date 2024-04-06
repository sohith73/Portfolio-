import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from "framer-motion";
import img1 from "../public/SpaceWebsite.png"
import img2 from "../public/SpaceWebsite.png"
import img3 from "../public/NextWebsite.png"

const ProjectsMain = () => {
     return (
          <motion.div
               className="flex flex-col items-center justify-center py-20"
               id="projects"
          >
               <motion.h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                    My Projects
               </motion.h1>
               <motion.div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                    <ProjectCard
                         src={img3}
                         title="Modern Next.js Portfolio"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ProjectCard
                         src={img2}
                         title="Interactive Website Cards"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <ProjectCard
                         src={img1}
                         title="Space Themed Website"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
               </motion.div>
          </motion.div>
     )
}

export default ProjectsMain