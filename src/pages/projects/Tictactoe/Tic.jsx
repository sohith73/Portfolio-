import React from 'react'

import { lazy, Suspense } from 'react'

const Tic = () => {
     const TT = lazy(()=> import('./ProjectScreen.jsx'))
     document.title = `Tic Tac Toe using min max`;
     return (
          <Suspense fallback={<> <div className='flex-row'><div className='text-4xl w-full h-full text-white'>Loading./......</div> <div>please wait!</div> </div></>}>
               {<TT />}
          </Suspense>
     )
}

export default Tic