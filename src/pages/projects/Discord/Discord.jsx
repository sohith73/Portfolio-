import React from 'react'
import { lazy, Suspense } from 'react'

const Discord = () => {
     const C = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Discord Clone with tailwindcss`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<C />}
          </Suspense>
     )
}

export default Discord