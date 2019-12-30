import React from 'react'
import CartSummary from './CartSummary';

function Cart ({products, sumOfAddedProducts}){
    return(
        <div className="container">
            <label>KOŠARICA</label>
            {products.length>0 && products.map(product=>{    
                return(
                   <CartSummary product={product} key={product.id}/>
                )
            })}
            {sumOfAddedProducts>0 && <label>UKUPNO: {sumOfAddedProducts}</label>}
        </div>
    )
}
    
export default Cart;