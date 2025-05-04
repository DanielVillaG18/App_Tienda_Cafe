import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LayoutConFooter from "./Layouts/LayoutConFooter";
import LayoutSinFooter from "./Layouts/LayoutSinFooter";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Paginas/Inicio';
import PaginaProductos from './Paginas/Productos';
import DetallesProductos from './Paginas/ProductosDetalles';
import InicioSesion from './Paginas/InicioSesion';
import Info from './Paginas/Informacion';
import Insumos from './Paginas/Insumos';
import Proveedores from './Paginas/Proveedores';
import Encabezado from "./Componentes/Encabezado";
import { CartProvider } from './Contextos/CartContext';
import Carrito from './Paginas/Carrito';
import Pago from "./Paginas/Pago";


import './App.css';

function App() {
  return (
  <CartProvider>
    <Router>
      <div className="App">
        <Encabezado />
        <main>
          <Routes>
                  {/* Rutas con Footer */}
            <Route element={<LayoutConFooter />}>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<PaginaProductos />} />
              <Route path="/insumos" element={<Insumos />} />
              <Route path="/informacion" element={<Info />} />
              <Route path="/proveedores" element={<Proveedores />} />
              <Route path="/inicioSesion" element={<InicioSesion />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/pago" element={<Pago />} />
            </Route>

                  {/* Rutas sin Footer */}
            <Route element={<LayoutSinFooter />}>
              <Route path="/producto/:id" element={<DetallesProductos />} />
              <Route path="/login" element={<InicioSesion />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  </CartProvider>
  );
}

export default App;