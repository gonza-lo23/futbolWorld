import React from 'react';
import '../styles/Carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Liver from '../styles/liver.jpg';
import Shirt from '../styles/shirt.jpg';
import Puma from '../styles/puma.jpg';
import S from '../styles/s.jpg';


function Carousel() {
    return (


        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
           <div className="titulo-central">
           <h1>Compra ya tu camiseta y llevate 10%</h1>
            <p>solo por tiempo limitado aplicando tu codigo BLACKFRIDAY
            </p>

           </div>
           
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Shirt} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Puma} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Liver} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={S} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Carousel
