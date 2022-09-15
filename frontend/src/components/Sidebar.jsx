import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import productActions from "../redux/actions/productActions";
import CartIcon from "./CartIcon";
import AdminProduct from "./AdminProduct";
import '../styles/sidebar.css'
import cody3 from '../media/cody7.png'

function Sidebar({ functionReload }) {
    const [category, setCategory] = useState("")
    const [reload, setReload] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector(store => store.userReducer.user)

    useEffect(() => {
        dispatch(productActions.getProductsbyCategory(category))
        // eslint-disable-next-line 
    }, [reload])

    const selectCategory = async (event) => {
        
        if (event.target === event.currentTarget && event.target.id !== category) {
            setCategory(event.target.id)
            setReload(!reload)
        }
    }

    return (
        <div className="sidebar hidden sm:flex w-64 md:h-full flex-col justify-between p-3">
            <div className="h-16 w-full flex items-center px-8 logo-side">
                <img alt='cody' src={cody3} width={100} height={30} />
            </div>
            <ul>
                <li className="list-hover flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center py-3 px-8" id="Recomendado" onClick={selectCategory}>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={4} y={4} width={6} height={6} rx={1} />
                            <rect x={14} y={4} width={6} height={6} rx={1} />
                            <rect x={4} y={14} width={6} height={6} rx={1} />
                            <rect x={14} y={14} width={6} height={6} rx={1} />
                        </svg>
                        <span className="text-sm ml-2">Recomendado</span>
                    </div>
                </li>
                <li className="list-hover flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center px-8 py-3" id="Desayuno" value="Desayuno" onClick={selectCategory}>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="7 8 3 12 7 16" />
                            <polyline points="17 8 21 12 17 16" />
                            <line x1={14} y1={4} x2={10} y2={20} />
                        </svg>
                        <span className="text-sm  ml-2">Desayuno/Merienda</span>
                    </div>
                </li>
                <li className="list-hover flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center px-8 py-3" id="Almuerzo" value="Almuerzo" onClick={selectCategory}>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="7 8 3 12 7 16" />
                            <polyline points="17 8 21 12 17 16" />
                            <line x1={14} y1={4} x2={10} y2={20} />
                        </svg>
                        <span className="text-sm  ml-2">Almuerzo</span>
                    </div>
                </li>
                <li className="list-hover flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center px-8 py-3" id="Postre" value="Postre" onClick={selectCategory}>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="7 8 3 12 7 16" />
                            <polyline points="17 8 21 12 17 16" />
                            <line x1={14} y1={4} x2={10} y2={20} />
                        </svg>
                        <span className="text-sm  ml-2">Postres</span>
                    </div>
                </li>
                <li className="list-hover flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center  px-8 py-3" id="Producto" value="Producto" onClick={selectCategory} >
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="7 8 3 12 7 16" />
                            <polyline points="17 8 21 12 17 16" />
                            <line x1={14} y1={4} x2={10} y2={20} />
                        </svg>
                        <span className="text-sm  ml-2">Productos</span>
                    </div>
                </li>
                <li className="list-hover flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center px-8 py-3" id="Cody" value="Cody" onClick={selectCategory} >
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="12 4 4 8 12 12 20 8 12 4" />
                            <polyline points="4 12 12 16 20 12" />
                            <polyline points="4 16 12 20 20 16" />
                        </svg>
                        <span className="text-sm ml-2">Menu Completo</span>
                    </div>
                </li>
                <li className="cart-box flex flex-col justify-end w-full hover:text-gray-300">
                    {user?.user.role === 'admin' ?
                        <AdminProduct functionReload={functionReload} />
                        :
                        <CartIcon />
                    }
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
