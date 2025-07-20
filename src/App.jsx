
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./assets/paginas/Principal";
import SobreMi from "./assets/paginas/SobreMi";
import Habilidades from "./assets/paginas/Habilidades";
import Formacion from "./assets/paginas/Formacion";
import Contacto from "./assets/paginas/Contacto";
import Proyectos from "./assets/paginas/Proyectos";
import '../src/assets/css/style.css'




function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/sobremi" element={<SobreMi />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/formacion" element={<Formacion />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
