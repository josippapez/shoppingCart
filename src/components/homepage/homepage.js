import React, { Component } from 'react'
import ProductList from '../products/productlist'
import jsondata from '../../products.json'

class Homepage extends Component {
    render() {
        console.log(jsondata.products);
        return (
            <div>
                <div>
                    {jsondata!=null && <ProductList products={jsondata.products}/>}
                </div>
                <div>

                </div>
            </div>
        )
    }
}
export default Homepage;