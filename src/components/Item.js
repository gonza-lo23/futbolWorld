import React from 'react'
import ss from '../styles/photos/balon.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from './itemCount';

function Item({id, title, description, imagelo, comprar,stock, initial}) {

    return (
        <div className="card"  >
        <img src={ss} className="card-img-top" alt="img"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <ItemCount 
            stock={stock} 
            initial={1} />
          <button  onClick={comprar} className="btn btn-primary">Añadir carrito</button>
        </div>
      </div>
    );
};

export default Item;
