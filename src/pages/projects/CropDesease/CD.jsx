import React from 'react'
import { lazy, Suspense } from 'react'

const CD = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Crop Disease identifying`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default CD