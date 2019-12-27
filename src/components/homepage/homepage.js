import React, { Component } from 'react'
import ProductList from '../products/productlist'
import { connect } from 'react-redux';
import { getProducts } from '../../store/action/productActions';

class Homepage extends Component {
    componentDidMount(){
        this.props.getProducts();
    }
    render() {
        var {products} = this.props;
        console.log(products);
        return (
            <div>
                <div>
                    {products!=null && <ProductList products={products.products}/>}
                </div>
                <div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      products: state.products
    };
  };
  
  const mapStateToDispatch = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts())
    };
  };
  
  export default connect(mapStateToProps, mapStateToDispatch)(Homepage);