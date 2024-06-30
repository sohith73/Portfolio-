import React from 'react'
import { lazy, Suspense } from 'react'


const DigitRec = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = ` NXT Digit recognition`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default DigitRec