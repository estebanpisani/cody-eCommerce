import React, { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux"
import userActions from '../redux/actions/userActions'

function GoogleSignIn() {
    const dispatch = useDispatch()

    async function handleCallback(res) {
        const userObject = jwt_decode(res.credential)
        dispatch(userActions.signInUser({
            email: userObject.email,
            password: userObject.sub,
            method: "google"
        }))
    }
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "746332027834-m8loo1r3f5jd58tjhk5hcmjrg1sor5fp.apps.googleusercontent.com",
            callback: handleCallback
        })
        google.accounts.id.renderButton(
            document.getElementById("gButton"),
            { theme: "filled_blue", size: "medium", shape: "pill", locale: "en-IN", text: "register_with", },
        )
    })
    return (
        <div>
            <div id='gButton'></div>
        </div>
    )
}
export default GoogleSignIn