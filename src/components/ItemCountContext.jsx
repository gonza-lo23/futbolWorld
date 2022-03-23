import * as React from 'react'

const ItemCountContext = React.createContext() 

function UserCountContext() {

 const [] = React.useState();
 
  return (
    <UserCountContext.Provider value={{userName, setUserName, saludar}}>
        {children}
        </UserCountContext.Provider>;
  );
};

export default ItemCountContext