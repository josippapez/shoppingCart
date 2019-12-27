const initState={
    products:[
        {id: '1',title:'First title',content:"pdgphkosfksodfkods"},
        {id: '2',title:'Second title',content:"sodgodkfos"},
        {id: '3',title:'Third title',content:"idjosd"}
    ],
    addedProducts:[],
    sumOfAddedProcuts:0
}
const rootReducer= (state=initState,action) =>{
    switch (action.type) {
        case 'GET_PRODUCTS':
            console.log('Fetched products:', action.products)
            return {...state, products:action.products};
        case 'ADD_PRODUCT':
            console.log('Added product:', action.addedProducts)
            return {...state, addedProducts:[...state.addedProducts, action.addedProducts]};
        case 'CALCULATE_SUM':
            console.log('Calculated:', action.sumOfAddedProcuts)
            return {...state, sumOfAddedProcuts:action.sumOfAddedProcuts};
        default:
            return state;
    }
}

export default rootReducer;