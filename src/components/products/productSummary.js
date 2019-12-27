import React from 'react'
import { useDispatch } from 'react-redux';
import { addProduct, calculateSumOfProducts } from '../../store/action/productActions';

function ProductSummary({product}) {
    const dispatch= useDispatch();
    function handleOnClick(){
        dispatch(addProduct({product}));
        dispatch(calculateSumOfProducts(product.price.amount));
    }
    return (
        <div className="card shadow-lg m-2">
            <div className="card-image-top">
                <img src={product.image} alt="/"/>
            </div>
            <div className="card-content text-center">
                <h4>{product.name}</h4>
                <p>{product.price.amount} {product.price.currency}/{product.price.measureUnit}</p>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleOnClick}>Dodaj</button>
        </div>
    )
}
export default ProductSummary;