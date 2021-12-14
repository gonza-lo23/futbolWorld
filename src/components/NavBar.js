import * as React from 'react';
import '../styles/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaFutbol } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";


function NavBar({props}) {
  
  const [counter, setCounter]= React.useState(0);

  React.useEffect(()=>{
    console.log("componente renderizado")
  },[props])

  const handleClick = () =>{
    setCounter((prevState) => prevState + 1)
  }
  const handleClick2 = () =>{
    setCounter((prevState) => prevState + 1)
  }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid">
    <a className="navbar-brand pl-5" href="#">Futbol World <FaFutbol /> </a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link  pr-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link pr-5" href="#">Botas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link pr-5" href="#">Camisetas</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link pr-5" href="#">Balones</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link pr-5" href="#">banderines</a>
        </li>
        <li className="nav-item">
          <a className="nav-link pr-5">
            {counter}
            <button onClick={handleClick}>cambiar estado</button>
          </a>
        </li>
        <button onClick={handleClick}>cambiar estado</button>
          <h1><IoCartOutline/></h1>
        <button onClick={handleClick}>cambiar estado</button>

      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar;
