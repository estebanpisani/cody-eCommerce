import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from '../redux/actions/userActions';

import Avatar from 'react-avatar';

import '../styles/UserProfile.css';
import '../styles/LoginForm.css';

export default function UserProfile() {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(false);
  const [edit, setEdit] = useState(false);
  const user = useSelector((store) => store.userReducer.user);

  const handleEdit = (e) => {
    e.preventDefault()
    setEdit(!edit);
  }
  const modifyUser = async (e) => {
    e.preventDefault();
    console.log(e);
    const newUser = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      image: e.target[3].value,
    }
    if(user.user.role === 'admin'){
      newUser.role=e.target[4].value;
    }
    await dispatch(userActions.modifyUser(user?.user?.id, newUser));
    setEdit(false);
    setReload(!reload);
  }

  return (
    <>
      <div className="profile-section flex flex-col justify-center items-center">
        <div className="profile-container pb-4 rounded-md shadow h-6/5 w-3/5">
          <div style={{ backgroundColor: '#533704' }} className="rounded-tl-md rounded-tr-md p-4 flex items-center justify-center w-full user-label">
            {edit ?
              <h2 style={{ color: 'white' }} className="text-xl font-semibold">
                Modificar Usuario
              </h2>
              :
              <h2 style={{ color: 'white' }} className="text-xl font-semibold text-center">
                Perfil
              </h2>
            }
          </div>
          <div className='flex justify-center items-center my-4'>
            <Avatar size="150" round="20px" src={user?.user?.image} />
          </div>

          <form onSubmit={modifyUser} className='user-profile-form w-3/6 flex flex-col items-center p-5 rounded'>

            <label className='mt-2 user-label' for="first-name-input">Nombre:</label>
            {edit ?
              <input className='my-1 rounded p-2' type="text" id='first-name-input' name='first-name-input' placeholder="Nombre" defaultValue={user?.user?.firstName} />
              :
              <p className='mb-1 rounded font-semibold'>{user?.user?.firstName}</p>
            }

            <label className='mt-2 user-label' for="last-name-input">Apellido:</label>
            {edit ?
              <input className='my-1 rounded p-2' type="text" id='last-name-input' name=' last-name-input' placeholder="Apellido" defaultValue={user?.user?.lastName} />
              :
              <p className='mb-1 rounded font-semibold'>{user?.user?.lastName}</p>
            }

            <label className='mt-2 user-label' for="email-input">Email:</label>
            {edit ?
              <input className='my-1 rounded p-2' type="email" id='email-input' name='email-input' placeholder="Email" defaultValue={user?.user?.email} />
              :
              <p className='mb-1 rounded font-semibold'>{user?.user?.email}</p>
            }

            {edit &&
              <>
                <label className='my-1 user-label' for="profile-photo">Foto de perfil:</label>
                {/* <input className='my-1' type="file" name='profile-photo' id="profile-photo" placeholder="Foto de perfil" /> */}
                <input defaultValue={user?.user?.image} className='my-1 rounded p-2' type="text" id='profile-photo' name='profile-photo' placeholder="Foto URL" />
              </>
            }
            {edit && user.user.role === 'admin' ?
              <>
                <label className="my-1 user-label">
                  Rol de Usuario
                </label>
                <input defaultValue={user?.user?.role} className="my-1 rounded p-2" id="username" type="text" />
              </>
              :
              null
            }
            {edit ?
              <button className='btn-form my-3' type='submit'>Guardar</button>
              :
              <button className='btn-form my-3' onClick={handleEdit}>Editar</button>
            }
          </form>
          {/* <form onSubmit={modifyUser} className="p-4 flex flex-col justify-center items-center">
            <div className="my-1">
              <label className="block text-gray-700 text-sm font-bold " htmlFor="username">
                Nombre
              </label>
              {edit ?
                <input defaultValue={user?.user?.firstName} className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                :
                <p className="shadow border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{user?.user?.firstName}</p>
              }
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold " htmlFor="username">
                Correo Electronico
              </label>
              <input defaultValue={user?.user?.email} className="shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" />
            </div>
            {user?.user?.role === 'admin' &&
              <div className='flex flex-wrap items-center justify-between'>
                <label className="block text-gray-700 text-sm font-bold " htmlFor="username">
                  Rol de Usuario
                </label>
                <input defaultValue={user?.user?.role} className="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
              </div>
            }
            <div >
              <label className="block text-gray-700 text-sm font-bold " htmlFor="username">
                Foto de Perfil
              </label>
              <input className="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="img-input" type="file" />
            </div>
            <div className="flex flex-wrap items-center justify-between mt-4">
              <button type='submit' className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Confirmar Edición</button>
            </div>
          </form> */}
        </div>
      </div>
    </>
  )
}