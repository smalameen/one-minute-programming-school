import React from 'react';
import '../Product/Product.css';


const Product = (props) => {
    // console.log(props.product);s
    const {name, photo, price} = props.course;
    return (
    <div className="d-flex"> 
        <div className="product-image">
            <img src={photo} alt=""/>
        </div>

        <div className="align-Items">
            <h4>Course Title: {name}</h4>
            <p>Price: ${price}</p>
            <button className="btn btn-success"
            onClick={ () => props.handleEnrollButton(props.course)}
            
            >  Enroll Now 
            </button>
            
        </div>
    </div>
    );
};

export default Product;