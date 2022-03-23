import * as React from 'react'
import cart from '../styles/photos/cart.jpg'
import '../styles/CartWidget.css'
import CartContex from './CartContex'

function CartWidget() {
 
  const {userName} = React.useContext(CartContex)
  
    return (
        <div className='cart' >
          <img src={cart}alt=""/>
          <h4>{userName}</h4>
        </div>
    )
}

export default CartWidget;
