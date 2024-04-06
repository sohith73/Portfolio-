import React from 'react'
import SkillText from './SkillText';

const Skills = () => {
     return (
          <section
               id="skills"
               className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 z-50"
               style={{ transform: "scale(0.9" }}
          >
               <SkillText />
          </section>
     )
}

export default Skills