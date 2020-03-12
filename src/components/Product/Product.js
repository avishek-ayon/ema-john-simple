import React from 'react';

const Product = (props) => {
    console.log(props.product.category);
    return (
        <div>
            {/* <h1>This is Product</h1> */}
            <h3>{props.product.name}</h3>
        </div>
    );
};

export default Product;