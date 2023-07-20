
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
import Admin from './Paginas/Admin';
import Admin_Login from './Paginas/Admin_Login';
import Registro from './Paginas/Registro';
import Mcat from './Paginas/Mcat';
import Mpro from './Paginas/Mpro';
import Musu from './Paginas/Musu';


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
        <Route path='/Admin' element={<Admin />}></Route>
        <Route path='/Admin_Login' element={<Admin_Login />}></Route>
        <Route path='/Registro' element={<Registro />}></Route>
        <Route path='/Mcat' element={<Mcat />}></Route>
        <Route path='/Mpro' element={<Mpro />}></Route>
        <Route path='/Musu' element={<Musu />}></Route>
        
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

