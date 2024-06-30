import React from 'react'
import { lazy, Suspense } from 'react'

const Notes = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Note taking application`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default Notes