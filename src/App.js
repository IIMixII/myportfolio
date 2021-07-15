import { useState, useEffect, useCallback } from "react";

//     Style
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//     Components
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar_component/Navbar_component";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Window from "./components/Window/Window";

//     App
export default function App() {
  const INITIAL_POSITION = window.screen.availHeight / 6;

  //  App states
  const [initialState, setInitialState] = useState(true);
  const [actualComponent, setActualComponent] = useState("");
  const [appPaddingTop, setAppPaddingTop] = useState(INITIAL_POSITION);
  const [divHeight, setDivHeight] = useState(0);

  //  Components states
  const [componentOpacity, setComponentOpacity] = useState(0);
  const [componentTransition, setComponentTransition] = useState("0.8s");
  const [projects, setProjects] = useState([]);
  const [componentHeight, setComponentHeight] = useState(0);

  const components = {
    Home: "",
    AboutMe: <AboutMe setComponentHeight={setComponentHeight} />,
    Skills: <Skills setComponentHeight={setComponentHeight} />,
    Projects: (
      <Projects
        projects={projects}
        setProjects={setProjects}
        setComponentHeight={setComponentHeight}
      />
    ),
    ContactMe: <Contact setComponentHeight={setComponentHeight} />,
  };

  const changeComponent = (newComponent) => {
    setComponentTransition("0s");
    setComponentOpacity(0);
    setActualComponent(components[newComponent]);

    setTimeout(() => {
      setComponentTransition("0.8s");
      setComponentOpacity(1);
    }, 800);
  };

  const correctMargin = useCallback(() => {
    if (initialState && actualComponent !== "") {
      setAppPaddingTop(0);
      setInitialState(false);
    } else if (!initialState && actualComponent === "") {
      setAppPaddingTop(INITIAL_POSITION);
      setInitialState(true);
    }
  }, [actualComponent, initialState, INITIAL_POSITION]);

  const createWindow = () => {
    if (actualComponent !== "") {
      return (
        <Window
          actualComponent={actualComponent}
          componentOpacity={componentOpacity}
          componentTransition={componentTransition}
        />
      );
    } else {
      return null;
    }
  };

  const changeWindowSize = useCallback(() => {
    if (!initialState) {
      setDivHeight(componentHeight + 30);
    } else {
      setDivHeight(0);
    }
  }, [initialState, componentHeight]);

  useEffect(() => {
    correctMargin();
    changeWindowSize();
  }, [actualComponent, componentHeight, changeWindowSize, correctMargin]);

  return (
    <div className="App" style={{ paddingTop: appPaddingTop }}>
      <Banner changeComponent={changeComponent} initialState={initialState} />
      <Navbar changeComponent={changeComponent} />

      <div className="divWindow" style={{ height: divHeight }}>
        {createWindow()}
      </div>
    </div>
  );
}
