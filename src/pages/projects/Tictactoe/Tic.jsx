import React from 'react'

import { lazy, Suspense } from 'react'

const Tic = () => {
     const TT = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Tic Tac Toe using min max`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<TT />}
          </Suspense>
     )
}

export default Tic