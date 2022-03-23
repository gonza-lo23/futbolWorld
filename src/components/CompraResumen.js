import * as React from 'react'
import { useParams } from 'react-router-dom';
import CartContex from './CartContex';
import Data from '../mocks/Data';
import '../styles/CompraResumen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './ItemCount'

function CompraResumen(props) {

  const {id} = useParams();
  const {userName, setUserName} = React.useContext(CartContex)


  return (
    <div >
    <section className="mt-5">
        <div className="container">
            <div className="carts">
            <div className="table-responsive">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col"className="text-white">Product</th>
                            <th scope="col"className="text-white">Price</th>
                            <th scope="col"className="text-white">Quantity</th>
                            <th scope="col"className="text-white">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                       {Data.map((data)=>{
                       return( <tr>
                            <td>
                                <div className="main">
                                    <div className="d-flex">
                      <img src={data.image}alt=""/>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h6>{data.price}</h6>
                            </td>
                            <td>
                                <Counter/>
                            </td>
                            <td>
                                <h6>$0.00</h6>
                            </td>
                        </tr>
                       )
                       })}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </section>
    <div className="col-lg-4 offset-lg-4">
        <div className="checkout">
            <ul>
                <li className="subtotal">subtotal
                    <span>$60.00</span>
                </li>
                <li className="cart-total">Total
                <span>$60.00</span></li>
            </ul>
            <a href="#"className="proceed-btn">Proceed to Checkout</a>
        </div>
    </div>

    </div>

  )
}

export default CompraResumen;

