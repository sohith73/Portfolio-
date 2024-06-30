import React from 'react'
import { lazy, Suspense } from 'react'

const Pan = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Pan card Tampering`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default Pan