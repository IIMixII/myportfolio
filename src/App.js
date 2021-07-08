import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar_component/Navbar_component";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
