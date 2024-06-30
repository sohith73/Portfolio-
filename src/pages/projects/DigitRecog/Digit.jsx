import React from 'react'
import { lazy, Suspense } from 'react'

const Digit = () => {
     const DigitOp = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Digit recognition `;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<DigitOp />}
          </Suspense>
     )
}

export default Digit