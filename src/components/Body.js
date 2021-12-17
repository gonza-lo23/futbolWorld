import React from 'react'
import  '../styles/Body.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Panels from './Panel.js'
import Carousel from './Carousel.js';


const Body = () => {
    return (
        <div className='image'>
         <Carousel/>
         <h1>Nuestros productos</h1>
          <Panels/>         
        </div>
    );
};

export default Body;
