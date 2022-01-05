import React from 'react'
import ss from '../styles/photos/balon.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from './ItemCount';
// id, title, description, imagelo, comprar,stock, initial
function Item(props) {

    return (
        <div className="card"  >
        <img src={props.imagen} className="card-img-top" alt="img"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <ItemCount 
            stock={props.stock} 
            initial={1} />
          <button  onClick={props.comprar} className="btn btn-primary">Añadir carrito</button>
        </div>
      </div>
    );
};

export default Item;
