import * as React from 'react';
import '../styles/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { FaFutbol } from "react-icons/fa";


function NavBar({props}) {
  
 

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    <a className="navbar-brand pl-5" href='#'>Futbol World <FaFutbol /> </a>
        
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link  pr-5" aria-current="page" href='#'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link pr-5" href='#'>Botas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link pr-5" href='#'>Camisetas</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link pr-5" href='#'>Balones</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link pr-5"href='#'>banderines</a>
        </li>
      
         <li>
           <a href="#">
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
