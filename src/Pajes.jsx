import Hero from './components/Hero';
import Navbar from './components/NavBar';
import StarsCanvas from './components/StarsCanvas';

function Pages() {
     return (
          // <div className="App">
          //   <StarsCanvas />
          // </div>
          <body
               className={`bg-[#030014] overflow-y-scroll overflow-x-hidden`}
          ><div className='bg-[#030014]'>
                    <StarsCanvas />
                    <Navbar />
                    <Hero />
                    
               </div>
          </body>
     );
}

export default Pages;
