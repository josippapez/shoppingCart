import jsondata from '../../products.json'

var sum=0;

export const getProducts=()=>{
    return (dispatch,getState)=>{
        dispatch({type:'GET_PRODUCTS', products:jsondata});
    }
}

export const addProduct=(product)=>{
    return (dispatch,getState)=>{
        dispatch({type:'ADD_PRODUCT', addedProducts:product});
    }
}

export const calculateSumOfProducts=(price)=>{
    return (dispatch,getState)=>{
        sum=sum+price;
        sum=Number((sum).toFixed(2));
        dispatch({type:'CALCULATE_SUM', sumOfAddedProcuts:sum});
    }
}