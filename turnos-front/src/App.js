import React from "react";
// Estilos
import './App.scss';
// Sistema de Routeo
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from "./config/routes";

// Componentes
// import AdminHome from './pages/Admin';


function App() {
  return (
      <Router>
        <Routes>
          {/* <Route path="*" element={<h1>ERROR404</h1>} /> */}
          {routes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              element={ <route.layout>
                          <route.component />
                        </route.layout>
              }/> 
          ))} 
        </Routes>
      </Router> 
  );
};

export default App;
