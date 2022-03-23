import * as React from 'react';

const CartContex = React.createContext("");


export const UserProvider = ({children}) => {
    const [userName, setUserName] = React.useState([]);

   
        function sumarGlobal  ()  {
            setUserName((f)=> f + 1 )
        }
    

    return <CartContex.Provider value={{userName, setUserName, sumarGlobal}}>
        {children}
        </CartContex.Provider>;
};

export default CartContex;