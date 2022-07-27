import axios from "axios";
import URL_API from "../../url";

const userActions = {

    signUpUsers: (userData) => { 
        return async (dispatch, getState) => {
            try {
                const res = await axios.post(`${URL_API}/api/auth/signup`, { userData })
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message, // SNACKBAR
                        success: res.data.success
                    }
                })
                return res
            } catch (error) {
                console.log(error)
            }
        }
    },
    signInUser: (logedUser) => {
        return async (dispatch, getState) => {
            const res = await axios.put(`${URL_API}/api/auth/signin`, { logedUser })
            if (res.data.success) {
                localStorage.setItem('token', res.data.response.token)
                dispatch({
                    type: 'USER',
                    payload: res.data.response,
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                })
            } else {
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
        }
    },
    signOutUser: (userOut) => {
        return async (dispatch, getState) => {
            localStorage.removeItem('token')
            dispatch({
                type: 'USER',
                payload: null,
            })
        }
    },
    verifyToken: (token) => {
        return async (dispatch, getState) => {
            await axios.get(`${URL_API}/api/auth/`,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    }
                })
                .then(user => {
                    if (user.data.success) {
                        dispatch({ type: 'USER', payload: user.data.response });
                        dispatch({
                            type: 'MESSAGE',
                            payload: {
                                view: true,
                                message: user.data.message,
                                success: user.data.success
                            }
                        });
                    } else { localStorage.removeItem('token') }
                }
                ).catch(error => {
                    if (error.response.status === 401)
                        dispatch({
                            type: 'MESSAGE',
                            payload: {
                                view: true,
                                message: "Sesión expirada.",
                                success: false
                            }
                        })
                    localStorage.removeItem('token')
                })
        }
    }
}


export default userActions