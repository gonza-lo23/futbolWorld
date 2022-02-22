import * as React from 'react'
import ItemDetail from './ItemDetail'
import Item from '../components/Item'
import Data from '../mocks/Data.js'
import Loader from '../styles/photos/480px-Loader.gif'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
const [product, setProductos] = React.useState({});
const [loading, setLoading] = React.useState(true)

const {itemId} = useParams();

   React.useEffect(()=>{
     setLoading(true);
     const getItems = new Promise ((resolve)=>{
       setTimeout(()=>{
           const filter = Data.find((item)=> item.id === itemId);
           resolve(filter);
       },3000);
     });
  

   getItems
   .then((res)=> {
       setProductos(res);
   })
   .finally(()=> setLoading(false));
},[itemId]);

    return loading ? <img src={Loader}></img>:
    <ItemDetail {...product} />;
};

export default ItemDetailContainer
