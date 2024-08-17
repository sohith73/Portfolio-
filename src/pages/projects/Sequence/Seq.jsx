import React from 'react'
import { lazy, Suspense } from 'react'

const Seq = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `NEXT sequence prediction`;
     return (
          <Suspense fallback={<> <div className='flex-row'><div className='text-4xl w-full h-full text-white'>Loading./......</div> <div>please wait!</div> </div></>}>
               {<C />}
          </Suspense>
     )
}

export default Seq