import React from 'react'
import StarsCanvas from '../components/StarsCanvas'
import NavProject from '../components/NavProject'
import Content from './Content'

const About = () => {
     return (
               <div className='relative flex flex-col h-full w-full'>
                    <StarsCanvas />
                    <NavProject />
                    <Content />
               </div>
     )
}

export default About