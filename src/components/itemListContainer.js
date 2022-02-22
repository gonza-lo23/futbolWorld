import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList.js';
import ItemCount from './ItemCount.js';
import Data from '../mocks/Data';
import Loader from '../styles/photos/480px-Loader.gif';

import { useParams } from 'react-router-dom';

const ItemListContainer = () =>{
    const [items, setItems] = React.useState([]);

  
    const [loading, setLoading] = React.useState(true);
  
    
    const { catId } = useParams();
  
    React.useEffect(() => {
      setLoading(true);
      const getItems = new Promise((resolve) => {
        setTimeout(() => {
          const myData = catId
            ? Data.filter((item) => item.category === catId)
            : Data;
  
          resolve(myData);
        }, 1000);
      });
  
      getItems
        .then((res) => {
          setItems(res);
        })
        .finally(() => setLoading(false));
    }, [catId]);
  
    
    return loading ? (
      <img src={Loader}></img>
    ) : (
          <div className='productos'>
              <ItemList items={items} />
          </div>
    )
  }

export default ItemListContainer;
