import React from 'react'
import { lazy, Suspense } from 'react'

const CR = () => {
     const Recommendation = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Course recommendation`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<Recommendation />}
          </Suspense>
     )
}

export default CR