import React from 'react'
import { lazy, Suspense } from 'react'

const Emotion = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Emotion Detector `;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default Emotion