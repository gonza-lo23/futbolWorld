import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContex from './CartContex';
import '../styles/Footer.css'




const Footer = () => {
const {userName, setUserName,saludar} = React.useContext(CartContex); 


    return (
      <div className='footer'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">FutbolWorld</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       
      </div>
    </nav>
    </div>
    )
}

export default Footer