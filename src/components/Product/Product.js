import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    console.log(props.product.category);
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            {/* <h1>This is Product</h1> */}
            <div>
                <h3 className="product-name">{name}</h3>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} lest in stock - Order soon</small></p>
                <button className="main-button"> <FontAwesomeIcon icon={faShoppingCart} /> add to chart </button>
            </div>
            
        </div>
    );
};

export default Product;