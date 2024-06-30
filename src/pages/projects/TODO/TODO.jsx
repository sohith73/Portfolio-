import React from 'react'
import { lazy, Suspense } from 'react'

const TODO = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `TODO web app`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default TODO