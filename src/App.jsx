import { BrowserRouter } from "react-router-dom";

import { About,  Experience, Hero, Navbar, Tech, Works, Certifications } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />

        <Works />
      </div>
    </BrowserRouter>
  );
}

export default App;
