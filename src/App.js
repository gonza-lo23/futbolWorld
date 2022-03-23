import * as React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import NotFound from './pages/NotFound.jsx';
import CompraResumen from './components/CompraResumen'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContex,{ UserProvider } from './components/CartContex';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='app'>
       <UserProvider>
       <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route  path="/category/:catId" element={<ItemListContainer/>}/>
        <Route  path="/product/:itemId" element={<ItemDetailContainer/>}/>
        <Route  path="/CompraResumen" element={<CompraResumen/>}/>
        <Route  path="/NotFound" element={<NotFound/>}/>
      </Routes>
       {/* <Footer/> */}
       </BrowserRouter>
      </UserProvider>
       </div>
  );
}

export default App;
