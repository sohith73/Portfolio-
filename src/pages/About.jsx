import React from 'react'
import StarsCanvas from '../components/StarsCanvas'
import NavProject from '../components/NavProject'
import { lazy, Suspense } from 'react'

const About = () => {
     const Content = lazy(() => import('./Content'))
     return (
          <div className='relative flex flex-col h-full w-full'>
               <StarsCanvas />
               <NavProject title={'About me!'} />
               <Suspense fallback={<> <div className='flex-row'><div className='text-4xl w-full h-full text-white'>Loading./......</div> <div>please wait!</div> </div></>}>
                    {<Content />}
               </Suspense>
          </div>
     )
}

export default About