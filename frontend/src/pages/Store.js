import React from 'react';
import '../App.css';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import productActions from "../redux/actions/productActions";
import userActions from "../redux/actions/userActions";
import Sidebar from '../components/Sidebar';




function Store() {
const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productActions.getProducts())
    //     if(localStorage.getItem('token')!==null){
    //       const token = localStorage.getItem("token")
    //       dispatch(userActions.VerificateToken(token))
    },[]
// }
    )
    
    const currentStore = useSelector(store => store.productReducer.products)
    console.log(currentStore)

    return (

        <Sidebar/>
    )
}

export default Store;