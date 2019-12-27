import jsondata from '../../products.json'

export const getProducts=()=>{
    return (dispatch,getState)=>{
        dispatch({type:'GET_PRODUCTS', products:jsondata});
    }
}