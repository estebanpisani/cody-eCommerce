import { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux"
import userActions from '../redux/actions/userActions'

function GoogleSignUp() {
    const dispatch = useDispatch()

    async function handleCallback(res) {
        const userObject = jwt_decode(res.credential)
        await dispatch(userActions.signUpUsers({
            firstName: userObject.given_name,
            lastName: userObject.family_name,
            email: userObject.email,
            password: userObject.sub,
            image: userObject.picture,
            method: "google"
        }))
    }
    // useEffect(() => {
    //     /* global google */
    //     google.accounts?.id.initialize({
    //         client_id: process.env.CLIENT_ID,
    //         callback: handleCallback
    //     })
    //     google.accounts.id.renderButton(
    //         document.getElementById("gButton"),
    //         { theme: "filled_blue", size: "medium", shape: "pill", locale: "en-IN", text: "signup_with" },
    //     )
    // });
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "746332027834-m8loo1r3f5jd58tjhk5hcmjrg1sor5fp.apps.googleusercontent.com",
            callback: handleCallback
        });

        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "filled_blue", size: "medium", shape: "pill", locale: "en-IN", text: "signup_with" },

        )
    });



    return (
        <div>
            <div id='buttonDiv'></div>
        </div>
    )
}
export default GoogleSignUp