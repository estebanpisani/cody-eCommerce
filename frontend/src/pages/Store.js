import React from 'react';
import '../App.css';
// import { useEffect } from 'react';
// import {useDispatch, useSelector} from 'react-redux'
// import productActions from "../redux/actions/productActions";
// import userActions from "../redux/actions/userActions";
import Sidebar from '../components/Sidebar';




function Store() {

    // useEffect(() => {
    //     dispatch(productActions.getProducts())
    //     if(localStorage.getItem('token')!==null){
    //       const token = localStorage.getItem("token")
    //       dispatch(userActions.VerificateToken(token))
    // }},[]
    // )

    return (

        <Sidebar/>
    )
}

export default Store;