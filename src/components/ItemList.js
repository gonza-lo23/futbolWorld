import * as React from 'react';
import ss from '../styles/balon.jpg';
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

const productos = [
    {
        id:0,
        title: 'balon',
        description: 'producto de alta gama marca adidas diseñado nasdkasmd',
        image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ferrersport.com%2Fblog%2Fcomo-elegir-botas-de-futbol&psig=AOvVaw1pZSFCM-KietN8SUT4VxF0&ust=1640435298970000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCOidm-y3_PQCFQAAAAAdAAAAABAG',
        stock:9,
    },
    {
        id:1,
        title: 'botines',
        description: 'producto de alta gama marca adidas diseñado nasdkasmd',
        image:{ss},
        stock:9,

    },{
        id:2,
        title: 'botines',
        description: 'masdkasmdmasdmkasdm',
        image:{ss},
        stock:9,

    },{
        id:3,
        title: 'botines',
        description: 'producto de alta gama marca adidas diseñado nasdkasmd',
        image:{ss},
        stock:9,
    },{
        id:4,
        title: 'botines',
        description: 'producto de alta gama marca adidas diseñado nasdkasmd',
        image:{ss}, 
        stock:9,

       },
    
]
