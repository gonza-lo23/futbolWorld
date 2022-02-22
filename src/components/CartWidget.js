import * as React from 'react'
import cart from '../styles/photos/cart.jpg'
import '../styles/CartWidget.css'
import {userContext} from './CartContex'

function CartWidget() {
  const [userName, setUserName] = React.useState("carlos")
  const lativia = React.useContext(userContext)
  
    return (
        <div className='cart' >
          <img src={cart}alt="" />
          <h4>{lativia}</h4>
        </div>
    )
}

export default CartWidget
