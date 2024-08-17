import React from 'react'
import { lazy, Suspense } from 'react'

const Digit = () => {
     const DigitOp = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Digit recognition `;
     return (
          <Suspense fallback={<> <div className='flex-row'><div className='text-4xl w-full h-full text-white'>Loading./......</div> <div>please wait!</div> </div></>}>
               {<DigitOp />}
          </Suspense>
     )
}

export default Digit