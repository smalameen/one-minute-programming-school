
import React, {useState} from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Amount from '../Amount/Amount';
import '../Shop/Shop.css';

const Shop = () => {
    const fakeData12 = fakeData.slice(0,12);
    // console.log(fakeData12);
    const [courses, setProduct] = useState(fakeData12);

    


    const [amount, setAmount] = useState([])

    

    const handleEnrollButton = (course) => {
        const newAmount = [...amount, course]
        setAmount(newAmount);
    }
    return (
        <div className="container">
            <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 border">
            {
               courses.map( cr => <Product course={cr}
                    handleEnrollButton = { handleEnrollButton}>
                </Product>)
            }
            </div>
            
            <div className="col-sm-12 col-md-6 col-lg-6"> 
                
               <Amount amount={amount}></Amount>
            
            </div> 
           
        </div>

        </div>
        
    );
};

export default Shop;