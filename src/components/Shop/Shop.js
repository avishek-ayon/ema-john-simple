import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'

const Shop = () => {
    // console.log(fakeData);
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
 
    return (
          
        <div className="shop-container">
             {/* <h1>This is shop</h1>
            <h3>{products.length}</h3> */}
            <div className="product-container">
                <ul>
                    {
                        products.map(products=><li>{products.name}</li>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
         
           
        </div>
    );
};

export default Shop;