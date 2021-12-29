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
                     imagen={producto.imagen}
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
                title: "sdfsdfsd",
                description: "producto de alta gama marca adidas diseñado nasdkasmd",
                image:"http://m.media-amazon.com/images/G/30/consumables/alberas/Deal_image_21-12._AC_SY230_.png",
                stock:9
            }
        ]