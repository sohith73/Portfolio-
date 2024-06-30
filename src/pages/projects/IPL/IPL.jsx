import React from 'react'
import { lazy, Suspense } from 'react'

const IPL = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Ipl win predictor `;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default IPL