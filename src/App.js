import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";
import Alert from "./components/Alert";
// import Alert from './components/Alert'
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <NoteState showAlert={showAlert}>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/Home"
            element={
              <ProtectedRoute>
                <Home showAlert={showAlert} />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/Home" element={<Home showAlert={showAlert} />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login showAlert={showAlert} />} />
          <Route path="/Signup" element={<Signup showAlert={showAlert} />} />
          {/* <Route path="/Navbar" element={<Navbar/>} /> */}
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
