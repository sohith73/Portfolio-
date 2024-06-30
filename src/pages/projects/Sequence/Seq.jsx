import React from 'react'
import { lazy, Suspense } from 'react'

const Seq = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `NEXT sequence prediction`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default Seq