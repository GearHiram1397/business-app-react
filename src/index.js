import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Collection from './components/Collection';
import Suplidores from './components/Suplidores';
import Inventario from './components/Inventario';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/dashboard" element={<App/>} />
        <Route path="/clientes" element={<Collection/>} />
        <Route path="/suplidores" element={<Suplidores/>} />
        <Route path="/inventario" element={<Inventario/>} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

