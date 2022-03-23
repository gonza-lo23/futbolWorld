import React from 'react'
import './card.css';
import ItemCount from './ItemCount';

function Card(props) {
  return (
    <div className='card'>
        <h1>{props.title}</h1>
        <img src={props.image} alt="image" />
        <p>{props.description}</p>
        <ItemCount stock={props.stock} />
        
    </div>
  )
}

export default Card