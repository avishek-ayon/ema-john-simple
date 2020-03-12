import React, { useState } from 'react';
import fakeData from '../../fakeData';

const Shop = () => {
    // console.log(fakeData);
    const first10=fakeData.slice(0,10);
    const [products,setProducts]=useState(first10);
 
    return (
        <div>
            <h1>This is shop</h1>
            <h3>{products.length}</h3>
            <ul>
                {
                    products.map(products=><li>{products.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;