import * as React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import NotFound from './pages/NotFound.jsx';
import ItemListContainer from './components/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div className='app'>
       <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route  path="/" element={<Home/>}/>
       
        <Route  path="teams" element={<ItemListContainer/>}/>
        
      </Routes>
      <Footer>esto es un footer</Footer>
       </BrowserRouter>
       </div>
  );
}

export default App;
