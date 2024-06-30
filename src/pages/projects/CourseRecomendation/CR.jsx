import React from 'react'
import { lazy, Suspense } from 'react'

const CR = () => {
     const Recomendation = lazy(()=> import('./ProjectScreen.jsx'))
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<Recomendation />}
          </Suspense>
     )
}

export default CR