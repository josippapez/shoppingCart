import React from 'react'
import CartSummary from './CartSummary';
import { useDispatch } from 'react-redux';

function Cart ({products, sumOfAddedProcuts}){
    const dispatch= useDispatch();
    dispatch({type:'GET_CALCULATED_SUM'})
    return(
        <div className="container">
            <label>KOŠARICA</label>
            {products.length>0 && products.map(product=>{    
                return(
                   <CartSummary product={product.product} key={product.product.id}/>
                )
            })}
            {sumOfAddedProcuts>0 && <label>UKUPNO: {sumOfAddedProcuts}</label>}
        </div>
    )
}
    
export default Cart;