import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import NotFound from './pages/NotFound.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  
  return (
      <BrowserRouter>
      <NavBar props = {5}/>
      <Routes> 

      <Route  path="*" component={NotFound}/>       
      <Route  exact path="/Home" component={Home}/>       
       
      </Routes>
      <footer>esto es un footer</footer>
      </BrowserRouter>
    
  );
}

export default App;
