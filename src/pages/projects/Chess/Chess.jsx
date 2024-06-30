import React from 'react'
import { lazy, Suspense } from 'react'

const Chess = () => {
     const Chess = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Chess Bot`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<Chess />}
          </Suspense>
     )
}

export default Chess