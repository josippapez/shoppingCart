import React from 'react'

function CartSummary({product}) {
    return (
        <div className="card shadow-lg m-2" id="cart-product">
            <div className="card-image-top">
                <img src={product.image} alt="/"/>
            </div>
            <div className="text-center">
                <h4>{product.name}</h4>
                <p>{product.price.amount} {product.price.currency}/{product.price.measureUnit}</p>
            </div>
        </div>
    )
}
export default CartSummary;