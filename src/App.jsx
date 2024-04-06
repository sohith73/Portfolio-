import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages from './Pajes';
import Projects from './components/Projects';

function App() {
     return (
          <body
               className={`bg-[#030014] overflow-y-scroll overflow-x-hidden select-none`}
          ><div className='bg-[#030014]'>
                    {/* <StarsCanvas />
          <Navbar />
          <Hero /> */}
                    <BrowserRouter>
                         <Routes>
                              <Route path='/' element={<Pages />} />
                              <Route path='/projects' element={<Projects />} />
                         </Routes>
                    </BrowserRouter>

               </div>
          </body>

     );
}

export default App;
