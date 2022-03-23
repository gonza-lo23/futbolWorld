import * as React from 'react';
import UserLoginContext from './UserLoginContext';

function Usuario() {

    const {userLoginData, setUserLoginData, cambiarUsuario} = React.useContext(UserLoginContext)

  return (
    <div>Usuario</div>
    <button onClick={cambiarUsuario}>LogIn</button>
  )
}

export default Usuario