import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero1 from "./components/Hero1";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import StarsCanvas from "./components/utils/Star";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      {/* bg-[url('./assets/Images/gif/earth-giphy.webp')] */}
      <div className=" bg-no-repeat bg-center bg-cover w-screen  h-screen fixed top-0 right-0 bg-black"></div>
      <div className="w-full relative pb-7 z-50 max-md:overflow-x-hidden box-border">
        {/* <div> */}
        <BrowserRouter>
          <Navbar />
          <Hero1 />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          {/* <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div> */}
          <ScrollToTop />
        </BrowserRouter>
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
