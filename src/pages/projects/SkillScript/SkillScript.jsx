import React from 'react'
import { Suspense, lazy } from 'react';

const SkillScript = () => {
     const Skills = lazy(()=> import('./ProjectScreen'))
     document.title = `skillscript`;
     return (
          <Suspense fallback={<> <div className='flex-row'><div className='text-4xl w-full h-full text-white'>Loading./......</div> <div>please wait!</div> </div></>}>
               {<Skills />}
          </Suspense>
     )
}

export default SkillScript