import { Suspense, lazy } from 'react';


const WhereAmI = () => {
     const Render = lazy(() => import('./ProjectScreen'))
     document.title = `Where am I?`;
     return (
          <Suspense fallback={<div>Loading./......</div>}>
               {<Render />}
          </Suspense>
     )
}

export default WhereAmI