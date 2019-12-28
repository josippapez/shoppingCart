import React, { Component } from 'react'
import ProductList from '../products/productlist'
import { connect } from 'react-redux';
import { getProducts } from '../../store/action/productActions';
import Cart from '../cart/Cart';

class Homepage extends Component {
    componentDidMount(){
        this.props.getProducts();
    }
    render() {
        var {products} = this.props;         
        return (
            <div className="row">
                <div className="col-9">
                    {products!=null && <ProductList products={products.products}/>}
                </div>
                <div className="col-3">
                    <Cart products={this.props.addedProducts} sumOfAddedProducts={this.props.sumOfAddedProducts}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      products: state.products,
      addedProducts: state.addedProducts,
      sumOfAddedProducts: state.sumOfAddedProducts
    };
  };
  
  const mapStateToDispatch = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts())
    };
  };
  
  export default connect(mapStateToProps, mapStateToDispatch)(Homepage);