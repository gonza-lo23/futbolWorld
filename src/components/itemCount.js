import React, {useState, useEffect} from 'react';

function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log(`items ${count}`)
        
    }, [count])

    const handleClickSuma = () => {
        setCount((f)=>f < stock ? f + 1 : f)
    }
    const handleClickResta = () => {
        setCount((c)=> c > initial ? c - 1 : c)
    }
    
    const Add = () => {
        count === 0 ? console.log(`no hay articulos para agregar`)
        :
        console.log(`agregaste ${count} elementos a tu carrito`)
        
    }
   
    return (
        <div>
            <h1>{count}</h1>
           <button onClick={handleClickResta} type="button" className="btn btn-primary">-</button>
           <button onClick={handleClickSuma}type="button" className="btn btn-primary">+</button>
           <br/> 
        </div>
    );
}

export default ItemCount;
