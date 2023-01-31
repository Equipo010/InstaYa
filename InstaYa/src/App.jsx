import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {NuevaEnvio} from "./components/NuevaEnvio";
import {BarraNavegacion} from "./components/BarraNavegacion";
import {EditarEnvio} from "./components/EditarEnvio";
import {Lobby} from "./components/Lobby";
import {Perfil} from "./components/Perfil";
import {CambiarContraseña} from "./components/CambiarContraseña";
import {OlvideContraseña} from "./components/OlvideContraseña";
import {ValidacionCodigo} from "./components/ValidacionCodigo";

function App() {

  return (
    <Router>
      <BarraNavegacion/>
      <Routes>
       <Route path="/" element= {<Login/>}/>
        <Route path="/register" element= {<Register/>}/>
        <Route path="/nueva-orden" element= {<NuevaEnvio/>}/>
        <Route path="/user-config" element= {<Perfil/>}/>
        <Route path="/historial" element= {<Lobby/>}/>
        <Route path="/cambiar-contraseña" element= {<CambiarContraseña/>}/>
        <Route path="/modificar-orden" element= {<EditarEnvio/>}/>
        <Route path="/olvide-contraseña" element= {<OlvideContraseña/>}/>
        <Route path="/validacion-codigo" element= {<ValidacionCodigo/>}/>
      </Routes>

    </Router>
  )
}

export default App
