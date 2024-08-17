import React from 'react'
import { lazy, Suspense } from 'react'

const CR = () => {
     const Recommendation = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Course recommendation`;
     return (
          <Suspense fallback={<> <div className='flex-row'><div className='text-4xl w-full h-full text-white'>Loading./......</div> <div>please wait!</div> </div></>}>
               {<Recommendation />}
          </Suspense>
     )
}

export default CR