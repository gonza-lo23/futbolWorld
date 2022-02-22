import * as React from 'react';
import '../styles/NavBar.css';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { FaFutbol } from "react-icons/fa";
import Home from '../pages/Home';


const NavBar = ({props}) => {
  const categories = [
    {id:'asdasd', address: '/productos', text: 'Todas'},
    {id:'sakqowe', address: '/category/basica', text: 'Remeras Basicas'},
    {id:'asdasd', address: '/category/estampada', text: 'Botas'},
  ]
 

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    <a className="navbar-brand pl-5" href='/'>Futbol World <FaFutbol /> </a>
        
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
      <NavLink to={`/`}>
        <li className="nav-item">
          <a className="nav-link  pr-5" aria-current="page" href='/'>Home</a>
        </li>
        </NavLink>
        <NavLink to={`/category/botas`}>
        <li className="nav-item">
        <a className="nav-link pr-5" href='/category/category'>Botas</a>          
        </li>
        </NavLink>
         
        <NavLink to={`/camisetas`}>
        <li className="nav-item">
          <a className="nav-link pr-5" href='#'>Camisetas</a>
        </li>
        </NavLink>
        <NavLink to={`/balones`}>
        <li className="nav-item">
          <a className="nav-link pr-5" href='#'>Balones</a>
        </li>
        </NavLink>
        <NavLink to={`/cart`}>
        <li className="nav-item">
          <a className="nav-link pr-5"href='../components/CartWidget'>Cart</a>
        </li>
        </NavLink>
         <li>
           <a href="/">
             <CartWidget/>
             </a>
         
         </li>
      
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar;
