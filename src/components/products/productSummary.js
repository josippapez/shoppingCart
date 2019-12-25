import React from 'react'

function ProductSummary({product}) {
    return (
        <div className="card">
            <img src={product.image} alt="/"/>
            <div className="card-section">
                <h4>{product.name}</h4>
                <p>{product.price.amount} {product.price.currency}/{product.price.measureUnit}</p>
            </div>
        </div>
    )
}
export default ProductSummary;