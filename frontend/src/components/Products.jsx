import React from 'react'
import '../styles/products.css'
import { Input } from "@material-tailwind/react";



const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://imgur.com/rMuohfR.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
    id: 2,
    name: 'Cheesecake',
    href: '#',
    imageSrc: 'https://i.imgur.com/0C7ptLx.png',
    imageAlt: 'cheesecake',
    price: '$50',
    color: 'green'
    },
    {
        id: 3,
        name: 'Strawberrycake',
        href: '#',
        imageSrc: 'https://i.imgur.com/yTalbip.png',
        imageAlt: 'cheesecake',
        price: '$50',
        color: 'green'
        },
        {
            id: 3,
            name: 'Strawberrycake',
            href: '#',
            imageSrc: 'https://i.imgur.com/yTalbip.png',
            imageAlt: 'cheesecake',
            price: '$50',
            color: 'green'
            }
    // More products...
  ]
  
  export default function Products() {
    return (
      <div className="bg-white">
        
        <div className="bg-cardcontainer max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Tienda</h2>
          <Input className='searchinput' placeholder=' Buscar . . .'/>
          <div className="mt-6 flex flex-wrap grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          
            {products.map((product) => (
              <div key={product.id} className="group relative group-cards">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none card-container">
                  <div className='imgcontainer'>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-center product-item"
                  />
                  </div>
                  <div className='info-content'>
                  <h3 className="text-sm text-white fontfamily">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                  </h3>
                  <div className='product-info'>
                        <p className="text-sm text-white">{product.color}</p>
                        <p className="price text-sm font-medium text-white">{product.price}</p>
                  </div>
                  <div>
                  <button class="button hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-500 rounded">
                        Ver más
                  </button>
                        
                  </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    
                    
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  