import "./App.css";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full h-screen ">
      {/* <div> */}
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      {/* </div> */}
    </div>
  );
}

export default App;
