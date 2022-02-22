import React from 'react'
import  '../styles/Body.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Panels from './Panel.js'
import Carousel from './Carousel.js';
import ItemDetailContainer from './ItemDetailContainer';

const Body = () => {
    return (
        <div className='image'>
          <Carousel/> 
         <h1>Nuestros productos</h1>
         <ItemDetailContainer/>  
        </div>
    );
};

export default Body;



