const initState={
    products:[
        {id: '1',title:'First title',content:"pdgphkosfksodfkods"},
        {id: '2',title:'Second title',content:"sodgodkfos"},
        {id: '3',title:'Third title',content:"idjosd"}
    ]
}
const rootReducer= (state=initState,action) =>{
    switch (action.type) {
        case 'GET_PRODUCTS':
            console.log('Fetched products:', action.products)
            return {...state, products:action.products};
        default:
            return state;
    }
}

export default rootReducer;