import React from 'react'
import Balon from '../styles/balon.jpg'
import '../styles/Panel.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Panel() {

  
    return (
        <div className='card2'>
            <div className="card">
  <img src={Balon} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example tecard's content.</p>
    <a href="#" className="btn btn-primary">Buy now !</a>
  </div>
</div>
<div className="card"  >
  <img src={Balon} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h5 className="card-title">Balons</h5>
    <p className="card-text">Some quick0tent.</p>
    <a href="#" className="btn btn-primary">Buy now !</a>
  </div>
</div>
<div className="card"  >
  <img src={Balon} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h5 className="card-title">Balons</h5>
    <p className="card-text">Some quick exa</p>
    <a href="#" className="btn btn-primary">Buy now !</a>
  </div>
</div>
<div className="card"  >
  <img src={Balon} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h5 className="card-title">Balons</h5>
    <p className="card-text">Some quick exa</p>
    <a href="#" className="btn btn-primary">Buy now !</a>
  </div>
</div>
<div className="card"  >
  <img src={Balon} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h5 className="card-title">Balons</h5>
    <p className="card-text">Some quick exa</p>
    <a href="#" className="btn btn-primary">Buy now !</a>
  </div>
  
</div>
        </div>
    )
}

export default Panel
