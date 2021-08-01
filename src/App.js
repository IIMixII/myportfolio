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
  const INITIAL_POSITION = window.screen.availHeight / 7;

  //  App states
  const [initialState, setInitialState] = useState(true);
  const [actualComponent, setActualComponent] = useState("");
  const [appPaddingTop, setAppPaddingTop] = useState(INITIAL_POSITION);
  const [divHeight, setDivHeight] = useState(0);
  const [divBorder, setDivBorder] = useState("none");
  const [divShadowBox, setDivShadowBox] = useState("0 0 10px transparent");

  //  Components states
  const [componentOpacity, setComponentOpacity] = useState(0);
  const [componentTransition, setComponentTransition] = useState("0s");
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
      setComponentTransition("1s");
      setComponentOpacity(1);
    }, 300);
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
    setDivBorder(
      initialState ? "solid 0px transparent" : "solid 2px #2f008eab"
    );
    setDivShadowBox(initialState ? "0 0 5px transparent" : "0 0 5px #2f008eab");
    setDivHeight(initialState ? 0 : componentHeight + 50);
  }, [initialState, componentHeight]);

  useEffect(() => {
    correctMargin();
    changeWindowSize();
  }, [actualComponent, componentHeight, changeWindowSize, correctMargin]);

  return (
    <div className="App" style={{ paddingTop: appPaddingTop }}>
      <Banner changeComponent={changeComponent} initialState={initialState} />
      <Navbar changeComponent={changeComponent} initialState={initialState} />

      <div
        className="divWindow"
        style={{
          height: divHeight,
          border: divBorder,
          boxShadow: divShadowBox,
        }}
      >
        {createWindow()}
      </div>
    </div>
  );
}
