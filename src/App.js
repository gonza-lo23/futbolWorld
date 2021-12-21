import * as React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
// import NotFound from './pages/NotFound.jsx';
import ItemListContainer from './components/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div className='app'>
       
       
      <NavBar /> 
       <Home/>
       <ItemListContainer/>
      <footer>esto es un footer</footer>
       </div>
      
  );
}

export default App;
