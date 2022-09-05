const shoppingActions = {
    addToCart: (id) => {
        return async (dispatch, getState) => {
            dispatch({
                type: 'ADD_TO_CART',
                payload: id
            });
        }
    },
    delFromCart: (id, all = false) => {
        return async (dispatch, getState) => {
            if (all){
                dispatch({
                    type: 'REMOVE_ALL_FROM_CART',
                    payload: id
                })
            } else {
                dispatch({
                    type: 'REMOVE_ONE_FROM_CART',
                    payload: id
                })
            }
        }
    },
    clearCart: () => {
        return async (dispatch, getState) => {
            dispatch({
                type: 'CLEAR_CART',
                payload: null,
            })
        }
    }
}
export default shoppingActions