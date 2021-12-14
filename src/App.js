
import NavBar from './components/NavBar';
import Body from './components/Body.js';
import Carousel from './components/Carousel.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const productos = [ 
    {id:0, name: "mochila", price: 100},
    {id:0, name: "caja", price: 100},
    {id:0, name: "perro", price: 100},
    {id:0, name: "oso", price: 100},
    {id:0, name: "auto", price: 100},

  ]
  return (
    <div className="App">
      
      <NavBar props = {5}/>
      <Carousel/>
      <h1>Nuestros productos</h1>
       <Body/>
       
       {productos.map((producto)=>{
        return<li>{producto.name}</li>
      })}
    </div>
  );
}

export default App;
