import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
