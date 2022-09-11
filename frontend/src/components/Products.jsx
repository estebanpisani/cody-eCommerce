
import React from 'react'
import '../styles/products.css'
import { Input } from "@material-tailwind/react";
import Grid from '@mui/material/Grid';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import ProductCard from './ProductCard';

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
        {filteredStore?.length > 0 ?
        <Grid2 sx={{mt:'24px', justifyContent:{xs:'center', sm:'space-around'}}} container columns={{ xs: 1, md: 2, lg:3 }}>
          {(filteredStore.map((product) =>
            (
            <Grid2 xs key={product._id} sx={{m:2, height:'24rem', maxHeight:'24rem', minWidth:'15rem', maxWidth: '13rem'}} className='card-container rounded-md overflow-hidden hover:opacity-75'>
                  <ProductCard data={product} functionReload={props.functionReload}>
                  </ProductCard>
            </Grid2>
            )
            ))}
          </Grid2> : (
            <div className="no-results-container">
              <div className="no-results w-full md:w-2/3">
                <p className="no-results-text lg:text-xl">
                  Su búsqueda no está disponible en muestro menú :c
                </p>
              </div>
            </div>
          )}
      </div>

    </div>
  )
}

