import React from 'react'
import '../styles/products.css'
import { Input } from "@material-tailwind/react";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import productActions from "../redux/actions/productActions";
import BasicModal from './modal';
// import userActions from "../redux/actions/userActions";

  
  export default function Products() {

    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()
    React.useEffect(() => {
      dispatch(productActions.filterProduct(input))
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[input])

  const currentStore = useSelector(store => store.productReducer.filter)
    return (
      <div className="bg-white">
        
        <div className="bg-cardcontainer max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Tienda</h2>
          <Input className='searchinput' placeholder='Buscar . . .' 
          ></Input>
          {/* onChange={(e) => {setInput(e.target.value)}} ESTO VA EN EL INPUT */}
          <div className="mt-6 flex flex-wrap grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          
            {currentStore.map((product) => (
              <div key={product._id} className="group relative group-cards">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none card-container">
                  <div className='imgcontainer'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-center product-item"
                  />
                  </div>
                  <div className='info-content'>
                  <h3 className="text-sm text-white fontfamily">
                      
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      
                  </h3>
                  <div className='product-info'>
                        <p className="price text-sm font-medium text-white">{product.price}</p>
                  </div>
                
                  <div>
                
               
                  </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    
                    
                  </div>
                  
                </div>
                <div className='detail-modal'> <BasicModal data={product}></BasicModal></div>
               
              </div>
            ))}
          </div>
        </div>   
    
      </div>     
      
   
    )
  }
  