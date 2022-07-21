const initialState = {
    user: null,
    message: {
        view: false,
        message: '',
        success:false
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER':
            return {
                ...state,
                user: action.payload,   
            }
        case 'MESSAGE':
            return {
                ...state,
                message: action.payload,   
            }
        default:
            return state
    }
}

export default userReducer