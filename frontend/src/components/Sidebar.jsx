import React from "react";
import '../styles/sidebar.css'
import cody3 from '../media/cody7.png'
import { useDispatch, useSelector } from 'react-redux'
import productActions from "../redux/actions/productActions";
import { useEffect } from "react";

import Products from "./Products";
import CartIcon from "./CartIcon";
import AdminProduct from "./AdminProduct";



function Sidebar({ functionReload }) {
    const [category, setCategory] = React.useState("")
    const [reload, setReload] = React.useState(false)
    const dispatch = useDispatch()
    const user = useSelector(store => store.userReducer.user)

    useEffect(() => {
        dispatch(productActions.getProductsbyCategory(category))
        // eslint-disable-next-line 
    }, [reload])

    const selectCategory = async (event) => {
        setCategory(event.target.id)
        event.preventDefault();
        const categoryclicked = category
        await dispatch(productActions.getProductsbyCategory(categoryclicked))
        setReload(!reload)
    }

    const currentStore = useSelector(store => store.productReducer.filter)

    return (
        <div className="flex flex-no-wrap">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <div className="sidebar w-64 absolute sm:relative bg-indigo-900 shadow md:h-full flex-col justify-between hidden sm:flex">
                <div>
                    <div className="h-16 w-full flex items-center px-8 logo-side">
                        <img alt='cody' src={cody3} width={100} height={30} />
                    </div>
                    <ul>
                        <li className="list-hover flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center py-3 px-8">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span id="Recomendado" value="recomendado" onClick={selectCategory} className="text-sm  ml-2">Recomendados</span>
                            </div>
                        </li>
                        <li className="list-hover flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="7 8 3 12 7 16" />
                                    <polyline points="17 8 21 12 17 16" />
                                    <line x1={14} y1={4} x2={10} y2={20} />
                                </svg>
                                <span id="Desayuno" value="Desayuno" onClick={selectCategory} className="text-sm  ml-2">Desayuno/Merienda</span>
                            </div>
                        </li>
                        <li className="list-hover flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="7 8 3 12 7 16" />
                                    <polyline points="17 8 21 12 17 16" />
                                    <line x1={14} y1={4} x2={10} y2={20} />
                                </svg>
                                <span id="Almuerzo" value="Almuerzo" onClick={selectCategory} className="text-sm  ml-2">Almuerzo</span>
                            </div>
                        </li>
                        <li className="list-hover flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="7 8 3 12 7 16" />
                                    <polyline points="17 8 21 12 17 16" />
                                    <line x1={14} y1={4} x2={10} y2={20} />
                                </svg>
                                <span id="Postre" value="Postre" onClick={selectCategory} className="text-sm  ml-2">Postres</span>
                            </div>
                        </li>
                        <li className="list-hover flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center  px-8 py-3">
                            <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="7 8 3 12 7 16" />
                                    <polyline points="17 8 21 12 17 16" />
                                    <line x1={14} y1={4} x2={10} y2={20} />
                                </svg>
                                <span id="Producto" value="Producto" onClick={selectCategory} className="text-sm  ml-2">Productos</span>
                            </div>
                        </li>
                        <li className="list-hover flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center px-8 py-3">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                    <polyline points="4 12 12 16 20 12" />
                                    <polyline points="4 16 12 20 20 16" />
                                </svg>
                                <span id="Cody" value="Cody" onClick={selectCategory} className="text-sm  ml-2">Menu Completo</span>
                            </div>
                        </li>
                        <li className="cartbox CartIcon flex w-full justify-between text-gray-600 hover:text-gray-300 cursor-pointer items-center px-8 py-3">
                            <div className="cartbox CartIcon flex items-center">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                    <polyline points="4 12 12 16 20 12" />
                                    <polyline points="4 16 12 20 20 16" />
                                </svg> */}
                                {user?.user.role === 'admin' ?
                                    <span className="text-sm  ml-2"><AdminProduct functionReload={functionReload} /></span>

                                    :
                                    <span className="text-sm  ml-2"><CartIcon></CartIcon></span>
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-gray-600 mr-8 visible sm:hidden relative">
                <ul className="p-y w-64 border-r bg-indigo-900 absolute rounded left-0 shadow mt-8 sm:mt-16 hidden">
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center py-3 px-2">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                <rect x={14} y={14} width={6} height={6} rx={1} />
                            </svg>
                            <span className="text-sm  ml-2">Dashboard</span>
                        </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                            <span className="text-sm  ml-2">Products</span>
                        </div>
                    </li>
                    <li className="cartbox flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
                        <div className=" flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                <circle cx={12} cy={12} r={9} />
                            </svg>
                            <span className="text-sm  ml-2">Performance</span>
                        </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="7 8 3 12 7 16" />
                                <polyline points="17 8 21 12 17 16" />
                                <line x1={14} y1={4} x2={10} y2={20} />
                            </svg>
                            <span className="text-sm  ml-2">Deliverables</span>
                        </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center  px-2 py-3">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                            <span className="text-sm  ml-2">Invoices</span>
                        </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                <polyline points="4 12 12 16 20 12" />
                                <polyline points="4 16 12 20 20 16" />
                            </svg>
                            <span className="text-sm  ml-2">Inventory</span>
                        </div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-300 hover:bg-indigo-800 cursor-pointer items-center px-2 py-3">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <circle cx={12} cy={12} r={3} />
                            </svg>
                            <span className="text-sm  ml-2">Settings</span>
                        </div>
                    </li>
                </ul>
                <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
            </div>
            {/* Sidebar ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
                    <Products filterStore={currentStore} title={category} functionReload={functionReload}></Products>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
