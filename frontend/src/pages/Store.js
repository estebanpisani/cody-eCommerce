import React from 'react';
import '../App.css';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import productActions from "../redux/actions/productActions";
import Sidebar from '../components/Sidebar'




function Store() {

const [reload, setReload]= React.useState(false)
const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productActions.getProducts())
    },[reload])
    
    function reloadChanger() {
        setReload(!reload);
    }
    
    const currentStore = useSelector(store => store.productReducer.products)
    

    return (

        <Sidebar functionReload={reloadChanger}/>
    )
}

export default Store;