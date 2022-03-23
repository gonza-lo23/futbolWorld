import * as React from 'react';
import CartContex from './CartContex';


function ItemCount({ stock, initial}) {

    const [count, setCount] = React.useState(0);
    const {userName, setUserName} = React.useContext(CartContex)

    React.useEffect(() => {
        console.log(userName)
        
    }, [userName])

    const handleClickSuma = () => {
        setCount((f)=>f < stock ? f + 1 : f)
    }
    const handleClickResta = () => {
        setCount((c)=> c > initial ? c - 1 : c)
    }
    
    const Add = () => {
       setUserName((s)=>s)
    }
   
    return (
        <div>
            <h1>{count}</h1>
           <button onClick={handleClickResta} type="button" className="btn btn-primary">-</button>
           <button onClick={handleClickSuma}type="button" className="btn btn-primary">+</button>
           <button onClick={Add}>Agregar al carrito</button>  
        </div>
        
    );
}

export default ItemCount;
