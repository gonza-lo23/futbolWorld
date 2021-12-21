import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemCount from './itemCount.js';

function itemListContainer({props}) {
    return (
        <div>
            <h1>{props}</h1>
            <ItemCount 
            stock={5} 
            initial={1} 
            onAdd={()=>console.log(`agregaste al carrito items`)}/>
        </div>
    )
}

export default itemListContainer;
