import * as React from 'react';
import ss from '../styles/photos/balon.jpg';
import Item from './Item';

function ItemList() {

const [items, setItems] = React.useState([]);
const [cargando, setCargando] = React.useState(false);

React.useEffect(() => {
    setCargando(true);
    getProducts()
    .then((result)=> setItems(result))
    .finally(()=> setCargando(false));
}, []);

const getProducts =()=> { 
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(productos)
        }, 2000 );
    });
};

const comprarProducto = (product) =>{
    console.log(`has comprado el producto ${product}`)
};

    return (
        <div>
            {cargando ? <p>Cargando...</p> : null}
            {items.map((producto)=> {
                return(
                    <Item
                     key={producto.id}
                     title={producto.title}
                     description={producto.description}
                     image={producto.image}
                     comprar={comprarProducto}
                     stock={producto.stock}
                    />
                );
            })};

        </div>
    )
}

export default ItemList;

const productos =  [
            {
                id:0,
                title: "balon",
                description: "producto de alta gama marca adidas diseñado nasdkasmd",
                image:"http://www.decathlon.es/es/p/botas-de-futbol-puma-future-3-2-fg-ag-ninos-azul/_/R-p-X8659631?mc=8659631",

                stock:9
            }
        ]