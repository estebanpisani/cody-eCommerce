
import React from 'react'
import '../styles/products.css'
import { Input } from "@material-tailwind/react";
// import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react';
// import productActions from "../redux/actions/productActions";
import BasicModal from './BasicModal';
import NoResults from './NoResults';

export default function Products(props) {
  const filterStore = props.filterStore
  const title = props.category
  const [input, setInput] = React.useState('')

  const filteredStore = filterStore.filter(item => item.name.toLowerCase().startsWith(input.trim().toLowerCase()))

  return (
    <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
      <div className="max-w-2xl p-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        {title ?
          <h2 className="store-title text-2xl font-extrabold tracking-tight text-gray-900">{title}</h2>
          :
          <h2 className="store-title text-2xl font-extrabold tracking-tight text-gray-900">Tienda</h2>
        }
        <Input onKeyUp={(e) => { setInput(e.target.value) }} className='my-3 search-input' placeholder='Prueba buscando Macciato'
        />
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {filteredStore?.length > 0 ?   (filteredStore.map((product) => (
          // Card
              <div key={product._id} className=" group relative card-container w-full min-h-80  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <div className='product-img'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-center img"
                  />
                </div>

                <div className="product-info">
                  <h3 className="text-sm fontfamily my-1">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-900 price my-1">${product.price}</p>
                  <div className='detail-modal'>
                    <BasicModal data={product} functionReload={props.functionReload}>
                    </BasicModal>
                  </div>
                </div>
              </div>
          ))) : (<NoResults/>)}
        </div>
      </div>
      </div>
  )
}

