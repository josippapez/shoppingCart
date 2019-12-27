import React from 'react'
import ProductSummary from './productSummary'

function ProductList({products}) {
    return (
        <div className="container">
            <div className="row row-cols-4">
            {products && products.map(product=>{
                return(
                    <div className="cell small-3" key={product.id}>
                        <ProductSummary product={product}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}
export default ProductList