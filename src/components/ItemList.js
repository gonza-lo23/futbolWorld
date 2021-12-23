import React, {useEffect} from 'react'
import Item from './Item'

function ItemList() {


    useEffect(() => {
        console.log('montado')
    }, [])

const asyncMock = () => {
    new Promise ((resolve,reject)=> {
        setTimeout(() => {
            console.log(resolve)
        }, 2000 );
    })
}

asyncMock
.then((response)=> console.log('person'))
.catch((error)=> console.log('error data'))


    return (
        <div>
            
        </div>
    )
}

export default ItemList
