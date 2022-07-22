const initialState = {
    products: [],
    aux: [],
    oneProduct: {},
    productsbycategory: [],
    filter: []
}

const productReducer = (state = initialState, action)=> {

    switch(action.type){
        case "GETPRODUCTS":
            return{
                ...state,
                products: action.payload,
                aux: action.payload,
                filter: action.payload //se llena el array para q antes del search ya se vean las cards
            }
            
            case 'GETONEPRODUCT': 
            return {
                ...state,
                oneProduct: action.payload,
                aux: action.payload
            }

            case "FILTERPRODUCTS":
                let productFilter = state.products.filter(item => item.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
            return { 
                ...state, //tomo el estadio inicial
                filter: productFilter //le cargo este nuevo estado del filtro

            }

            case 'GETPRODUCTSBYCATEGORY':
                let productByCategory = state.products.filter(item => item.categories.includes(action.payload))
            return {
                ...state,
                // productsbycategory: productByCategory,
                filter: productByCategory,
                aux: action.payload
            }
                
            default:
            return state
    }
}

export default productReducer