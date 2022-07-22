import React, { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux"
import userActions from '../redux/actions/userActions'

function GoogleSignUp() {
    const dispatch = useDispatch()

    async function handleCallback(res){
        const userObject = jwt_decode(res.credential)
        console.log(userObject);
        dispatch(userActions.signUpUsers({
            firstName: userObject.name,
            email: userObject.email,
            password: userObject.sub,
            country: "Argentina",
            image: userObject.picture,
            method: "Google Sign Up"
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
export default GoogleSignUp