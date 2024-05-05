import React from 'react'
import HeroContent from './HeroContent'
import Footer from './Footer'
import Skills from './Skills'

const Hero = () => {
     return (
          <div className="relative flex flex-col h-full w-full" id="about-me">
               <HeroContent />
               <Skills />
               <Footer />
          </div>
     )
}

export default Hero