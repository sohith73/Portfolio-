import React from 'react'
import NavProject from './NavProject';
import ProjectHeros from './ProjectHeros';
import StopBackground from './StopCanvas';

const Projects = () => {
     return (
          <body
               className={`bg-[#030014] overflow-y-scroll overflow-x-hidden`}
          ><div className='bg-[#030014]'>
                    <StopBackground />
                    <NavProject />
                    <ProjectHeros />
                    
               </div>
          </body>
     )
}

export default Projects