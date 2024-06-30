import React from 'react';
import { lazy, Suspense } from 'react'

const You = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Youtube bt BSC`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default You