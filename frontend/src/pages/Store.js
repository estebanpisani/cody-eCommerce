import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import productActions from "../redux/actions/productActions";
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';
import '../styles/sidebar.css'
import '../App.css';

function Store() {

    const dispatch = useDispatch();
    const [reload, setReload] = useState(false)
    // const [currentStore, setCurrentStore] = useState([]);

    useEffect(() => {
        dispatch(productActions.getProducts());
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        dispatch(productActions.getProductsbyCategory(category));
        // eslint-disable-next-line 
    }, [reload])

    function reloadChanger() {
        setReload(!reload);
    }

    const category = useSelector(store => store.productReducer.category)
    const currentStore = useSelector(store => store.productReducer.filter);

    return (
        <div className="flex flex-no-wrap">
            <Sidebar reload={reloadChanger} />
            <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
                    <Products filterStore={currentStore} category={category} functionReload={reloadChanger} />
                </div>
            </div>
        </div>
    )
}

export default Store;