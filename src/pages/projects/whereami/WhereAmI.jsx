import { Suspense, lazy } from 'react';


const WhereAmI = () => {
     const Render = lazy(() => import('./ProjectScreen'))
     document.title = `Where am I?`;
     return (
          <Suspense fallback={<> <div className='flex-row'><div className='text-4xl w-full h-full text-white'>Loading./......</div> <div>please wait!</div> </div></>}>
               {<Render />}
          </Suspense>
     )
}

export default WhereAmI