import axios from 'axios';


const productActions = {
    getProducts: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('')
            dispatch({type: "GETPRODUCTS", payload:res.data.response.product})
        }
    },
    getOneProduct: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(``)
            dispatch({type: 'GETONEPRODUCT', payload:res.data.response})
        }
    },

    filterProduct: (input) => {
        return async (dispatch, getState) => {
            dispatch ({type: "FILTERPRODUCTS", payload: input})
        }
    },

    getProductsbyCategory: (caterogy) =>{
        return async (dispatch, getState) => {
            // const res = await axios.get('', {category})
            dispatch({type: 'GETPRODUCTSBYCATEGORY', payload:category})
        }
    }
}

export default productActions