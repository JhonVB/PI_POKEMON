import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Page/Home/Home";
import Landing from "./Page/Landing/Landing";
import Detalle from "./Page/Detalle/Detalle";
import Formulario from "./Page/Formulario/Formulario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/pokemon/:id" element={<Detalle />} />
          <Route exact path="/formulario" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
