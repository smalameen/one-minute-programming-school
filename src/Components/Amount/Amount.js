import React from 'react';

const Amount = (props) => {
    const amount = props.amount;
    console.log(amount);

     
    const totalAmount = amount.reduce((totalAmount, product) => totalAmount + product.price, 0);
    
    
    let internetCharge = 0;
    if(totalAmount > 1000){
        internetCharge = 100;
    } else if(totalAmount >500) {
        internetCharge = 50
        
    } else if (totalAmount > 200){
        internetCharge = 10;
    }

    const  grandTotal = internetCharge + totalAmount; 


    return (
        <div>
            <h4>Order Summery</h4>
            <h3>Items Ordered: {amount.length}</h3>
            <p>Product Price : ${totalAmount}</p>
            <small>Internet Charge: ${internetCharge.toFixed(0)}</small>
            <h3>Total Amount : {grandTotal}</h3>
            
        </div>
    );
};

export default Amount;