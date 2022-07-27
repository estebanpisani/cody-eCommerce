import React from 'react';
import '../App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import productActions from "../redux/actions/productActions";
import Sidebar from '../components/Sidebar'

function Store() {

    const [reload, setReload] = React.useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productActions.getProducts())
        // eslint-disable-next-line
    }, [reload])

    function reloadChanger() {
        setReload(!reload);
    }

    return (
        <Sidebar functionReload={reloadChanger} />
    )
}

export default Store;