import React from 'react'
import { Suspense, lazy } from 'react';

const SkillScript = () => {
     const Skills = lazy(()=> import('./ProjectScreen'))
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<Skills />}
          </Suspense>
     )
}

export default SkillScript