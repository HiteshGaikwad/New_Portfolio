import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      {/* bg-[url('./assets/Images/gif/earth-giphy.webp')] */}
      <div className=" bg-no-repeat bg-center bg-cover w-screen h-screen fixed top-0 right-0 "></div>
      <div className="w-full   relative pb-7 z-50 ">
        {/* <div> */}
        <Navbar />
        {/* <Hero /> */}
        <Hero1 />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
