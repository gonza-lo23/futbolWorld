import * as React from 'react'
import ItemDetail from './ItemDetail'
import Item from '../components/Item'

function ItemDetailContainer() {
const [data, setData] = React.useState([]);
const [loading, setLoading] = React.useState(false)

   React.useEffect(()=>{
      const url = "http://localhost:3001/products";
      setLoading(true);
      fetch(url)
      .then((response)=>{
          if (response.ok){
              return response.json();
          }else{
              throw response;
          }
      })
      .then((data)=> setData(data))
      .catch((error)=> console.log('error'))
      .finally(()=>setLoading(false));

   },[]);


    return (
        <div>
            <h1>ijfisdjf</h1>
            {loading && <p>Cargando...</p>}
            {data?.map((producto)=>{
              return(
                  <Item
                  key={producto.id}
                  title={producto.title}
                  description={producto.description}
                  image={producto.image}
                  stock={producto.stock}                
                  />
              )
            })}
        </div>
    )
}

export default ItemDetailContainer
