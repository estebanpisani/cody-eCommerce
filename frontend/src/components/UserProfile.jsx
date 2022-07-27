import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";
import '../styles/UserProfile.css'
import Avatar from 'react-avatar';




export default function UserProfile() {

    const [reload, setReload] = useState(false)
    const dispatch = useDispatch();

    const user = useSelector((store) => store.userReducer.user);
    console. log(user);

    // useEffect((id) => {
    //     dispatch(userActions.getUserById(id))
    
    //   }, [reload])


    const modifyUser = async (e) => {
        e.preventDefault()
    
        const modifiedUser = {
          firstName: e.target[0].value,
        //   lastName: e.target[1].value,
          email: e.target[1].value,
        //   password: e.target[3].value,
        //   from: e.target[4].value,
          role: e.target[2].value,
          image: e.target[3].value,
    
        }
        await dispatch(userActions.modifyUser(user?.user?.id, modifiedUser));
        setReload(!reload);
      }

    return (
<>

<div className="mofifyUser-container">
 <div className="flex items-center justify-center">
   <div className="bg-white rounded-md shadow h-3/4 w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5 ">
     <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
       <p className="text-base font-semibold">Modificar Usuario</p>
     </div>
     <div className="px-4 md:px-10   md:pb-4 pb-7 ">

       <form onSubmit={modifyUser} className="mt-5">
       <div className='flex justify-center items-center mb-5'>
       <Avatar size="150" round="20px" src={user?.user?.image} />
       </div>

         <div >
           <label class="block text-gray-700 text-sm font-bold " for="username">
             Nombre
           </label>
           <input defaultValue={user?.user?.firstName} class="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
         </div>
   
           <div>
             <label class="block text-gray-700 text-sm font-bold " for="username">
               Correo Electronico
             </label>
             <input defaultValue={user?.user?.email} class="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" />
           </div>
         
         <div className='flex flex-wrap items-center justify-between'>
             <label class="block text-gray-700 text-sm font-bold " for="username">
               Rol de Usuario
             </label>
             <input defaultValue={user?.user?.role} class="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
         </div>
         <div >
           <label class="block text-gray-700 text-sm font-bold " for="username">
             Imagen de Usuario (opcional)
           </label>
           <input defaultValue={user?.user?.image} class="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="file" />
         </div>

        
         <div className="flex flex-wrap items-center justify-between mt-4">

           <button type='submit' className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Confirmar Edición</button>
        
         </div>
       </form>

     </div>
   </div>
 </div>
 </div>

</>

 )
}