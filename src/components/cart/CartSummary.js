import React from 'react'
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../store/action/productActions';

function CartSummary({product}) {
    const dispatch= useDispatch();
    function handleOnClick(){
        dispatch(removeProduct(product, product.price.amount));
    }
    return (
        <div className="card shadow-lg m-2" id="cart-product">
            <div className="card-image-top">
                <img src={product.image} alt="/"/>
            </div>
            <div className="text-center">
                <h4>{product.name}</h4>
                <p>{product.price.amount} {product.price.currency}/{product.price.measureUnit}</p>
            </div>
            <button type="button" className="btn btn-warning" onClick={handleOnClick}>Obriši</button>
        </div>
    )
}
export default CartSummary;