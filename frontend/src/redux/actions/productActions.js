import axios from 'axios';
import URL_API from "../../url";

const productActions = {
    getProducts: () => {
        return async (dispatch, getState) => {
            const res = await axios.get(`${URL_API}/api/products`)
            dispatch({ type: "GETPRODUCTS", payload: res.data.response.products })
            dispatch({ type: "GETSTOCK", payload: res.data.response.products })
        }
    },
    getOneProduct: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(``)
            dispatch({ type: 'GETONEPRODUCT', payload: res.data.response })
        }
    },
    filterProduct: (input) => {
        return async (dispatch, getState) => {
            dispatch({ type: "FILTERPRODUCTS", payload: input })
        }
    },
    getProductsbyCategory: (category) => {
        return async (dispatch, getState) => {
            dispatch({ type: 'GETPRODUCTSBYCATEGORY', payload: category }
            )
        }
    },
    buyCart: (currentcart, total) => {
        const token = localStorage.getItem('token');
        return async (dispatch, getState) => {
            const res = await axios.post(`${URL_API}/api/products/api/products/buy`, { currentcart, total },
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    }
                })
            return res
        }
    },
    addProduct: (newProduct) => {
        const token = localStorage.getItem('token');
        return async (dispatch, getState) => {
            const res = await axios.post(`${URL_API}/api/products`, { ...newProduct },
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    }
                })

            return res
        }
    },
    modifyProduct: (modifiedProduct) => {
        const id = modifiedProduct.id;
        const token = localStorage.getItem('token');
        return async (dispatch, getState) => {
            const res = await axios.put(`${URL_API}/api/products/${id}`,
                { ...modifiedProduct },
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    }
                }
            );
            return res
        }
    },
    deleteProduct: (id) => {
        const token = localStorage.getItem('token');

        return async (dispatch, getState) => {
            const res = await axios.delete(`${URL_API}/api/products/${id}`,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    }
                })
            // dispatch({
            //     type: 'message',
            //     payload: {
            //         view: true,
            //         message: res.data.message,
            //         success: res.data.success
            //     }
            // })
            return res
        }
    }
}




export default productActions