import React from 'react'
import { lazy, Suspense } from 'react'

const Chess = () => {
     const Chess = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Chess Bot`;
     return (
          <Suspense fallback={<> <div className='flex-row'><div className='text-4xl w-full h-full text-white'>Loading./......</div> <div>please wait!</div> </div></>}>
               {<Chess />}
          </Suspense>
     )
}

export default Chess