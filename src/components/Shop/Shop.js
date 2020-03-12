import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    // console.log(fakeData);
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
 
    return (
          
        <div className="shop-container">
             {/* <h1>This is shop</h1>
            <h3>{products.length}</h3> */}
            <div className="product-container">
              
                {
                    // products.map(products=><Product><li>{products.name}</li></Product>)
                    products.map(pd=><Product product={pd}></Product>)
                }
               
            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
         
           
        </div>
    );
};

export default Shop;