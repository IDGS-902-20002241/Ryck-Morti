
import "./assets/styles/CharacterList2.css";
import { useRegistroClicks } from "../src/assets/hooks/useLocalStorage";
import {Route,Routes} from "react-router-dom"
import PaginaPrincipal from "./assets/pages/page1";
import NoEncontrada from "./assets/pages/NoEncontrada";
import PageTwo from "./assets/pages/page2";
import PantallaNavegacion from "./assets/pages/pantallaNavegacion";
import Detalles from "./assets/pages/Detalles";
import RutaPrivada from '../src/assets/auth/RutaPrivada'
import Login from "./assets/pages/Login";
function App() {

  const {
  //historial,
  registrarClick,
  // limpiarHistorial,
} = useRegistroClicks();

 

  return (
    <main className="app" onClickCapture={registrarClick}>
      <nav>
        <div>
          <PantallaNavegacion/>

          <Routes>  
            <Route path='/' element={<PaginaPrincipal/>}></Route>
            <Route path='/femeninos' element={<PageTwo/>}></Route>
            <Route path='/detalles' element={<RutaPrivada><Detalles/></RutaPrivada>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='*' element={<NoEncontrada/>}></Route>
          </Routes>
        </div>
      </nav>
    </main>
  );
}

export default App;
