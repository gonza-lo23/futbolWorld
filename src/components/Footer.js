import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {userContext} from './CartContex.jsx';




const Footer = () => {
const userCompres = React.useContext(userContext)
    return (
       <div>
        <h1>{userCompres}</h1>
       </div>
    )
}

export default Footer