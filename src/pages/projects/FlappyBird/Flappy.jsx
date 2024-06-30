import React from 'react'
import { lazy, Suspense } from 'react'

const Flappy = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Flappy Bird by bsc`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default Flappy