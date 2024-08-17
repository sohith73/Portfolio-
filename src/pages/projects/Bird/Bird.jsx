import React from 'react'
import { lazy, Suspense } from 'react'

const Bird = () => {
     const Bird = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Bird Breed prediction`;
     return (
          <Suspense fallback={<> <div className='flex-row'><div className='text-4xl w-full h-full text-white'>Loading./......</div> <div>please wait!</div> </div></>}>
               {<Bird />}
          </Suspense>
     )
}

export default Bird
//{<> <div className='flex-row'><div className='text-4xl w-full h-full text-white'>Loading./......</div> <div>please wait!</div> </div></>}