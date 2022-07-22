import React, { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux"
import userActions from '../redux/actions/userActions'

function GoogleSignIn() {
    const dispatch = useDispatch()

    async function handleCallback(res){
        const userObject = jwt_decode(res.credential)
        dispatch(userActions.signInUser({
            email: userObject.email,
            password: userObject.sub,
            method: "Google Sign In"
        }))
    }
    useEffect(()=>{
    /* global google */
    window.google?.accounts.id.initialize({
        client_id: process.env.CLIENT_ID,
        callback: handleCallback
    })
    window.google?.accounts.id.renderButton(
        document.getElementById("gButton"),
        { theme: "outline", size: "medium" }
    )
    })
    return(
        <div>
            <div id='gButton'></div>
        </div>
    )
}
export default GoogleSignIn