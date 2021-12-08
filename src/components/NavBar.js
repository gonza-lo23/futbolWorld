import React from 'react'
import '../styles/NavBar.css'

function NavBar() {
    return (
        <div>
            <nav>
            <div className="logo">

        <p>Futbol World</p>
            </div>
        
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Portofolio</a></li>
            </ul>
            </nav>
        </div>
    )
}

export default NavBar
