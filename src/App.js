import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NoteState from "./context/notes/NoteState";
// import Alert from './components/Alert'

function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        {/* <Alert message="hi this is an alert"/> */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* <Route path="/Navbar" element={<Navbar/>} /> */}
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
