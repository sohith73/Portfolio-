import React from 'react'
import { lazy, Suspense } from 'react'
const Blog = () => {
     const Blog = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Bird Breed prediction`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<Blog />}
          </Suspense>
     )
}

export default Blog