import React from 'react'
import Flogo from '../styles/uefa_champions_league_positional_awards.webp'
import '../styles/NavBar.css'
import { FaFutbol } from "react-icons/fa"

function NavBar() {
    return (
        <div>
            <nav>
            <div className="logo">

        <p>Futbol World
            <FaFutbol />
        </p>
            </div>
        
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Partidos</a></li>
                <li><a href="">Resultados</a></li>
                <li><a href="">Champions</a></li>
                <li><a href="">Libertadores</a></li>

            </ul>
            </nav>
            <div className='image'>

            <img src={Flogo} alt="Flogo" />
            </div>
        </div>
    )
}

export default NavBar
