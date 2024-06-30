import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages from './Pajes';
import Projects from './components/Projects';
import Alert from './components/Alert';
import About from './pages/About';
import { Suspense } from 'react';
import WhereAmI from './pages/projects/whereami/WhereAmI';
import Skhc from './pages/projects/SKHC/Skhc';
import SkillScript from './pages/projects/SkillScript/SkillScript';
import CR from './pages/projects/CourseRecomendation/CR';
import Tic from './pages/projects/Tictactoe/Tic';
import Digit from './pages/projects/DigitRecog/Digit';


function App() {
     return (
          <body
               className={`bg-[#030014] overflow-y-scroll overflow-x-hidden select-none`}
          ><div className='bg-[#030014]'>
                    <div className='z-50 sm:hidden  '>
                         <Alert />
                    </div>
                    <BrowserRouter>
                         <Suspense fallback={<div>Loading.....</div>}>
                              <Routes>
                                   <Route path='/' element={<Pages />} />
                                   <Route path='/projects' element={<Projects />} />
                                   <Route path='/xyz' element={<About />} />
                                   <Route path="/1" element={<WhereAmI />} />
                                   <Route path="/2" element={<Skhc />} />
                                   <Route path="/3" element={<SkillScript />} />
                                   <Route path="/4" element={<CR />} />
                                   <Route path="/5" element={<Tic />} />
                                   <Route path="/6" element={<Digit />} />
                                   {/* <Route path='/1' element={<ProjectScreen />} /> */}
                              </Routes>
                         </Suspense>
                    </BrowserRouter>
               </div>
          </body >

     );
}

export default App;
