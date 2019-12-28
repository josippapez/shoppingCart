const initState={
    products:[
        {id: '1',title:'First title',content:"pdgphkosfksodfkods"},
        {id: '2',title:'Second title',content:"sodgodkfos"},
        {id: '3',title:'Third title',content:"idjosd"}
    ],
    addedProducts:[],
    sumOfAddedProducts:0
}
const rootReducer= (state=initState,action) =>{
    switch (action.type) {
        case 'GET_PRODUCTS':
            console.log('Fetched products:', action.products)
            return {...state, products:action.products};
        case 'ADD_PRODUCT':
            console.log('Added product:', action.addedProducts)
            return {...state, addedProducts:[...state.addedProducts, action.addedProducts]};
        case 'REMOVE_PRODUCT':
            console.log('Removed product:', action.removedProduct)
            console.log("Result", state.addedProducts);
            var result = state.addedProducts.filter(product => product.id !== action.removedProduct.id);
            console.log("Result", result);
            return {...state, addedProducts:result, sumOfAddedProducts:0};
        case 'CALCULATE_SUM':
            console.log('Calculated:', action.sumOfAddedProducts)
            return {...state, sumOfAddedProducts:action.sumOfAddedProducts};
        default:
            return state;
    }
}

export default rootReducer;