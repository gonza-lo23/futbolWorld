
import NavBar from './components/NavBar';
import Body from './components/Body.js';
import Carousel from './components/Carousel.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carousel/>
      <h1>Nuestros productos</h1>
       <Body/>
       

    </div>
  );
}

export default App;
