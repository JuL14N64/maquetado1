
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Navs
import Inicio from './Paginas/Inicio';
import Productos from './Paginas/Productos';
import Contactanos from './Paginas/Contactanos';
import Login from './Paginas/Login';
import Categorias from './Paginas/Categorias';
import Compra from './Paginas/Compra';
import Carrito from './Paginas/Carrito';
import Acceso from './Paginas/Acceso';
import Dashboard1 from './Paginas/Dashboard1';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Inicio' element={<Inicio />}></Route>
        <Route path='/Categorias' element={<Categorias />}></Route>
        <Route path='/Contactanos' element={<Contactanos />}></Route>
        <Route path='/Productos' element={<Productos />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Compra' element={<Compra />}></Route>
        <Route path='/Carrito' element={<Carrito />}></Route>
        <Route path='/Acceso' element={<Acceso />}></Route>
        <Route path='/Dashboard1' element={<Dashboard1 />}></Route>
        
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

