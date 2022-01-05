import * as React from 'react'
import ItemDetail from './ItemDetail'
import Item from '../components/Item'
import Data from '../mocks/db.json'
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
const [product, setProductos] = React.useState({});
const [loading, setLoading] = React.useState(true)

const {itemId} = useParams();

   React.useEffect(()=>{
     const getItems = new Promise ((resolve)=>{
       setTimeout(()=>{
           const filter = Data.find((item)=> item.id === itemId)
       },3000)
     })
  

   getItems
   .then((res)=> {
       setProductos(res);
   })
   .finally(()=> setLoading(false));
},[itemId]);

    return
    <ItemDetail {...product} />
}

export default ItemDetailContainer
