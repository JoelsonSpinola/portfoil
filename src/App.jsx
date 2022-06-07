import "./App.css";
import About from "./Componente/About/About";
import Flyer from "./Componente/Flyer/Flyer";
import Intro from "./Componente/Introducao/Intro";
import Photo from "./Componente/Photography/Photo";
import UIUX from "./Componente/UXUI/UIUX";


function App() {
  return (
    <div>
        <Intro />
        <About />
        <Photo />
        <Flyer/>
        <UIUX/>
    </div>
  );
}

export default App;
