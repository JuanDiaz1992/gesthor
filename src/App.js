

import React from 'react';
import './App.css';
import { HashRouter, Routes, Route, Navigate} from 'react-router-dom';

import Layaout from "./componentes/Layaout"
import PagCarga from "./componentes/PagCarga"
const Nosotros = React.lazy(()=> import("./componentes/Nosotros"))
const Home = React.lazy(()=> import("./componentes/Home"))
const OtrosServicios = React.lazy(()=> import("./componentes/OtrosServicios"))
const Contacto = React.lazy(()=> import("./componentes/Contacto"))

function App() {
  return (
    <>
      
  <HashRouter>
    <Routes>
      <Route path='/' element={        
      <React.Suspense fallback={<PagCarga/>}>
         <Layaout />
        </React.Suspense>}> 

      
       
      <Route index element={
        <React.Suspense fallback={<PagCarga/>}>
         <Home />
        </React.Suspense>
      }/>
      <Route path='Home' element={
        <React.Suspense fallback={<PagCarga/>}>
         <Home />
        </React.Suspense>
        }/>
      <Route path='Nosotros' element={
        <React.Suspense fallback={<PagCarga/>}>
          <Nosotros/>
        </React.Suspense>
        }/>

        <Route path='OtrosServicios' element={
          <React.Suspense fallback={<PagCarga/>}>
            <OtrosServicios />
          </React.Suspense>
        }/>
        <Route path='Contacto' element={
          <React.Suspense fallback={<PagCarga/>}>
            <Contacto/>
          </React.Suspense>
        }/>
      <Route path='Otros servicios' element={<div>404 - not found</div>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
      </Route>   

      </Routes>

  </HashRouter>



    </>
  );
}

export default App;
