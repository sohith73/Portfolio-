import React from 'react'
import { lazy, Suspense } from 'react'

const DogBreed = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `DOg breed finder `;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default DogBreed