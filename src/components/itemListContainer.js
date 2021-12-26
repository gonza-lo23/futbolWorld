import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemList from './ItemList.js'

import ItemCount from './itemCount.js';

function itemListContainer({props}) {
    return (
        <div>
            <h1>{props}</h1>
            <ItemList />
            
        </div>
    )
}

export default itemListContainer;
