import * as React from 'react';
import '../styles/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';
import { FaFutbol } from "react-icons/fa";


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
    <Link className="navbar-brand pl-5" to="/">Futbol World <FaFutbol /> </Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link  pr-5" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link pr-5" to="/">Botas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link pr-5" to="/">Camisetas</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link pr-5" to="/">Balones</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link pr-5" to="/">banderines</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar;
