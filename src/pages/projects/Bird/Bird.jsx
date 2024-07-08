import React from 'react'
import { lazy, Suspense } from 'react'

const Bird = () => {
     const Bird = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Bird Breed prediction`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<Bird />}
          </Suspense>
     )
}

export default Bird
//{<div>Loading./......</div>}