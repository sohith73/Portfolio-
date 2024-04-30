import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages from './Pajes';
import Projects from './components/Projects';
import Alert from './components/Alert';

function App() {
     return (
          <body
               className={`bg-[#030014] overflow-y-scroll overflow-x-hidden select-none`}
          ><div className='bg-[#030014]'>
                    <div className='z-50 sm:hidden  '>
                         <Alert />
                    </div>
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
