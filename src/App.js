import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NotFound from './pages/NotFound.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const productos = [ 
    {id:0, name: "mochila", price: 100},
    {id:0, name: "caja", price: 100},
    {id:0, name: "perro", price: 100},
    {id:0, name: "oso", price: 100},
    {id:0, name: "auto", price: 100},

  ]
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar props = {5}/>
      <Routes>

      <Route  path="*" component={NotFound}/>       
      <Route  exact path="/Home" component={Home}/>       
       
      </Routes>
      <footer>esto es un footer</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
