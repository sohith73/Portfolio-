import React from 'react'
import { Suspense, lazy } from 'react';

const Skhc = () => {
     const SKHC = lazy(() => import('../SKHC/ProjectScreen'))
     document.title = `SKHC`;
     return (
          <Suspense fallback={<> <div className='flex-row'><div className='text-4xl w-full h-full text-white'>Loading./......</div> <div>please wait!</div> </div></>}>
               {<SKHC />}
          </Suspense>
     )
}

export default Skhc