import React from 'react'
import cart from '../styles/photos/cart.jpg'
import '../styles/CartWidget.css'
function CartWidget() {
    return (
        <div className='cart' >
          <img src={cart}alt="" />
        </div>
    )
}

export default CartWidget
