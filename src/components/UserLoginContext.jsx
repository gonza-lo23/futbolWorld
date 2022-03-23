import * as React from 'react';


const UserLoginContext = React.createContext("")

function userLoginProvider({children}) {

  const [userLoginData, setUserLoginData] = React.useState(false)

  function cambiarUsuario () {
    alert('te has logeado ')
    setUserLoginData(true)
  }

  return (<UserLoginContext.Provider value={userLoginData, setUserLoginData, cambiarUsuario}>{children}</UserLoginContext.Provider>
  )
};

export default UserLoginContext;