import React from 'react'
import Balon from '../styles/balon.jpg'
import '../styles/Panel.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Panel() {
    return (
        <div>
            <div className="card" style={{width: 18rem}} >
  <img src={Balon} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h5 className="card-title">Balons</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
    )
}

export default Panel
