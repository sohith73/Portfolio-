import React from 'react'
import { lazy, Suspense } from 'react'

const CR = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Crop Recommendation System`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default CR