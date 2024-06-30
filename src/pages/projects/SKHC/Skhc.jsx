import React from 'react'
import { Suspense, lazy } from 'react';

const Skhc = () => {
     const SKHC = lazy(()=> import('../SKHC/ProjectScreen'))
     document.title = `SKHC`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<SKHC />}
          </Suspense>
     )
}

export default Skhc