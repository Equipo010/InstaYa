import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {NuevaOrden} from "./components/NuevaOrden";
import {BarraNavegacion} from "./components/BarraNavegacion";
import {ModificarOrden} from "./components/ModificarOrden";
import {ListaOrdenes} from "./components/ListaOrdenes";
import {User} from "./components/User";
import {CambiarContraseña} from "./components/CambiarContraseña";
import {OlvideContraseña} from "./components/OlvideContraseña";
import {ValidacionCodigo} from "./components/ValidacionCodigo";

function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element= {<Login/>}/>
        <Route path="/register" element= {<Register/>}/>
      </Routes>
      <BarraNavegacion/>
      <Routes>
        <Route path="/nueva-orden" element= {<NuevaOrden/>}/>
        <Route path="/user-config" element= {<User/>}/>
        <Route path="/historial" element= {<ListaOrdenes/>}/>
        <Route path="/cambiar-contraseña" element= {<CambiarContraseña/>}/>
        <Route path="/modificar-orden" element= {<ModificarOrden/>}/>
        <Route path="/olvide-contraseña" element= {<OlvideContraseña/>}/>
        <Route path="/validacion-codigo" element= {<ValidacionCodigo/>}/>
      </Routes>

    </Router>
  )
}

export default App
