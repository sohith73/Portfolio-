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
import TODO from './pages/projects/TODO/TODO';
import You from './pages/projects/Youtube/You';
import IPL from './pages/projects/IPL/IPL';
import Seq from './pages/projects/Sequence/Seq';
import Pan from './pages/projects/PanCard/Pan';
import Flappy from './pages/projects/FlappyBird/Flappy';
import Emotion from './pages/projects/Emotion/Emotion';
import DogBreed from './pages/projects/DogBreed/DogBreed';
import Chess from './pages/projects/Chess/Chess';
import CD from './pages/projects/CropDesease/CD';
import Discord from './pages/projects/Discord/Discord';
import Blog from './pages/projects/Blog/Blog';
import Bird from './pages/projects/Bird/Bird';
import Notes from './pages/projects/Notes/Notes';
import PageOp from './pages/PageOp';

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
                                   <Route path="/6" element={<TODO />} />
                                   <Route path="/7" element={<You />} />
                                   <Route path="/8" element={<IPL />} />
                                   <Route path="/9" element={<Digit />} />
                                   <Route path="/10" element={<Seq />} />
                                   <Route path="/11" element={<Pan />} />
                                   <Route path="/12" element={<Flappy />} />
                                   <Route path="/13" element={<Emotion />} />
                                   <Route path="/14" element={<DogBreed />} />
                                   <Route path="/15" element={<Chess />} />
                                   <Route path="/16" element={<CR />} />
                                   <Route path="/17" element={<CD />} />
                                   <Route path="/18" element={<Discord />} />
                                   <Route path="/19" element={<Blog />} />
                                   <Route path="/20" element={<Bird />} />
                                   <Route path="/21" element={<Notes />} />
                                   <Route path="/22" element={<PageOp />} />
                                   {/* <Route path='/1' element={<ProjectScreen />} /> */}
                              </Routes>
                         </Suspense>
                    </BrowserRouter>
               </div>
          </body >

     );
}

export default App;
