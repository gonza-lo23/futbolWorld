import * as React from 'react'
import  '../styles/Body.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Panels from './Panel.js'
import Carousel from './Carousel.js';
import ItemDetailContainer from './ItemDetailContainer';
import Card from './Card';
import { getFirestore } from "../firebase/index"

const Body = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(()=>{
        const db = getFirestore();
        const productsCollection = db.collection("products");

        productsCollection
        .get()
        .then((querySnapshot)=>{
            console.log(querySnapshot)
            if(querySnapshot.empty){
                console.log("no hay productos")
            }else{
                setData(querySnapshot.docs.map((doc)=>({id: doc.id, ... doc.data() })));
            }
        })
        .catch((error)=>{console.log('error', error)});
    },[]);
    return (
        <div className='image'>
          {/* <Carousel/>  */}
         <h1>productos en rebajas</h1>
         <div className='conjunto'>
             {data.map((producto) => {
                 return(
                    <Card
                    key={producto.id}
                    title={producto.title}
                    description={producto.description}
                    image={producto.imagen}
                    stock={producto.stock}
                    initial={producto.initial}
                    comprar={producto.comprar}
                    />
                 )
             })}
         </div> 
         {/* <ItemDetailContainer/>  */}
        </div>
    );
};

export default Body;

// const productos = [
//     {id:0, title:'remera', description:'sdkadskadkoa', 
//     image:"https://cdn-web-home-images.wallapop.com/home-images-prod/image_328_section_356_9144094f-f6a2-42ba-849d-14b54ba44c64.png?cacheBuster=3xi5wUIrDRAIjzMqfYes/w==",
//     stock:5, initial:0},
//     {id:1, title:'campera', description:'sdkadskadkoa', 
//     image:"https://images-eu.ssl-images-amazon.com/images/G/30/EUBluefield/Price_Perception/Money_Saving_Programs/Photoshoot/Outlet/RTB_4_Outlet_379x304_Desktop_single_image_card_ES_1._SY304_CB651086692_.jpg",
//     stock:9,initial:0},
//     {id:2, title:'pulsera', description:'sdkadskadkoa', 
//     image:"https://m.media-amazon.com/images/I/31oEszTc67L._AC_SY230_.jpg",
//     stock:7, initial:0},
// ]

   // React.useEffect(()=>{
    //     fetch('https://api.mercadolibre.com/sites')
    //     .then((response)=>{
    //     if(response.ok){
    //        return response.json()
    //     }else{
    //          throw response
    //      }
    //      })
    //     .then((data)=>setData(data))
    //     .catch((error)=>console.log(`se rompio todo${error.status}`))
    // },[])