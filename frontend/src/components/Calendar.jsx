import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import eventsActions from "../redux/actions/eventsActions";
import Comments from "./Comments";
import toast, { Toaster } from 'react-hot-toast';
import Cody from '../media/cody2.png'




const Calendar = ({ props }) => {

  const [show, setShow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [popUpHandler, setPopUpHandler] = useState(false);
  const [reload, setReload] = useState(false)
  const dispatch = useDispatch();
  const userLogin = localStorage.getItem('token')
  const user = useSelector((store) => store.userReducer.user);
  var options = { year: 'numeric', month: 'long', day: 'numeric' };


  async function likesOrDislikes() {
    const res = await dispatch(eventsActions.likeDislike(props._id));
    setReload(!reload);
  }
  async function bookingEvent() {
    const res = await dispatch(eventsActions.bookingYesNo(props._id));

    setReload(!reload);

  }
  async function deleteEvent() {
    const res = await dispatch(eventsActions.deleteEvent(props._id));

    setReload(!reload);
  }
  const modifyEvent = async (e) => {
    e.preventDefault()

    const data = {
      name: e.target[0].value,
      description: e.target[7].value,
      authors: e.target[2].value,
      images: e.target[4].value,
      price: Number(e.target[5].value),
      limit: Number(e.target[6].value),
      date: e.target[1].value,

    }
    await dispatch(eventsActions.modifyEvent(props._id, data));
    setPopUpHandler(!true)
    setReload(!reload);
  }

  useEffect(() => {
    dispatch(eventsActions.getEvents())

  }, [reload])

  // const notify = () => toast.custom(<div className='w-full bg-orange-400 rounded-lg '>
  //   <div>
  //     <div className='flex  justify-center items-center'>
  //       <img className='h-16 w-16' src={Cody} alt="" />
  //       <p className='text-white w-full'>dañslkdñalskdñasl</p>
  //     </div>

  //   </div>
  // </div>, {
  //   duration: 7000,
  //   position: 'bottom-left'
  // });

  return (

    <>
      {/* <div>
        <button onClick={notify}>Make me a toast</button>
        <Toaster />
      </div> */}
      {showModal ? <div className="z-50 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full z-0 absolute inset-0 backdrop-blur-sm" />
        <div className='mx-auto container'>
          {/*BODY MODAL*/}
          <div className="relative p-6  flex items-center justify-center h-full w-full">
            {/* Card code block start */}
            <div className="bg-white dark:bg-gray-800 shadow rounded background-modal ">
              <div className="relative">
                <img
                  className="h-56 shadow rounded-t w-full object-cover object-center"
                  src={props.images}
                  alt="Imagen del Evento"
                />
                <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                  <img
                    className="w-full h-full overflow-hidden object-cover rounded"
                    src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
                    alt="Imagen del Autor del Evento"
                  />
                </div>
              </div>
              <div className="px-5 xl:px-10 pb-10">
                <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5"></div>
                <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
                  <div className="xl:pr-16 w-full xl:w-2/3">
                    <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                      <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                        {props.authors}
                      </h2>

                      {user ? (
                        <div>
                          {props.likes?.includes(user._id) ? (
                            <>
                              <button
                                className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full"
                                onClick={likesOrDislikes}
                              >
                                DISLIKE
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full"
                                onClick={likesOrDislikes}
                              >
                                LIKE
                              </button>
                            </>
                          )}
                        </div>
                      ) : (
                        <>
                          <button className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full">
                            LIKE
                          </button>
                        </>
                      )}

                      {/* <button
                          className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full"
                          onClick={likesOrDislikes}
                        >
                          LIKE
                        </button> */}
                    </div>
                    <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">
                      {props.description}
                    </p>
                  </div>
                  <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                    <div className="mr-6 xl:mr-10">
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                        {" "}
                        {`${props.likes?.length}`}
                      </h2>
                      <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                        Likes
                      </p>
                    </div>
                    <div className="mr-6 xl:mr-10">
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                        {props.limit}
                      </h2>
                      <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                        Capacidad
                      </p>
                    </div>
                    <div>
                      <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                        {props?.limit - props?.attendance?.length}
                      </h2>
                      <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                        Vacantes
                      </p>
                    </div>
                  </div>
                  <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
                    <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
                      <button onClick={bookingEvent} className="rounded-full bg-gray-200 text-gray-600 dark:text-gray-400 text-sm px-6 py-2 flex justify-center items-center">
                        RESERVAS
                      </button>

                      {/* <div className="ml-5 rounded-full bg-green-200 text-green-500 text-sm px-6 py-2 flex justify-center items-center">Reservas</div> */}
                    </div>
                    <button className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm">
                      SignIn
                    </button>
                    <button onClick={() => setShowModal(!true)} className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm">Cerrar</button>
                  </div>
                </div>
              </div>
              <Comments props={props} />
            </div>
            {/* Card code block end */}
          </div>
          {/*footer*/}

        </div>

      </div> : null}
      {/* MODAL EDIT EVENT */}
      {popUpHandler ? <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div onclick="popuphandler(false)" className="w-full h-full z-0 absolute inset-0 backdrop-blur-sm" />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto h-3/4 w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5 ">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">Modificar Evento</p>
                <button onClick={() => setPopUpHandler(!true)} className="focus:outline-none">
                  <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 7L7 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 7L21 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="px-4 md:px-10   md:pb-4 pb-7 ">

                <form onSubmit={modifyEvent} className="mt-5">
                  <div >
                    <label class="block text-gray-700 text-sm font-bold " for="username">
                      Nombre del Evento
                    </label>
                    <input defaultValue={props.name} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                  </div>


                  <div className='flex justify-between items-center flex-wrap'>
                    <div>
                      <label class="block text-gray-700 text-sm font-bold " for="username">
                        Fecha del Evento
                      </label>
                      <input defaultValue={new Date(props.date).toUTCString()} class="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="date" />
                    </div>
                    <div>
                      <label class="block text-gray-700 text-sm font-bold " for="username">
                        Presentador
                      </label>
                      <input defaultValue={props.authors} class="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>

                  </div>
                  {/* <div >
                    <label class="block text-gray-700 text-sm font-bold " for="username">
                      Presentador
                    </label>
                    <input defaultValue={props.authors} class="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                  </div> */}
                  <div >
                    <label class="block text-gray-700 text-sm font-bold " for="username">
                      Imagen del presentador (opcional)
                    </label>
                    <input defaultValue={""} class="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Pega la url de la imagen" />
                  </div>
                  <div >
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Imagen del Evento
                    </label>
                    <input defaultValue={props.images} class="shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                  </div>
                  <div className='flex flex-wrap items-center justify-between'>
                    <label class="block text-gray-700 text-sm font-bold mb-2 " for="username">
                      Precio del evento
                    </label>
                    <input defaultValue={Number(props.price)} type='number' class="px-2 shadow appearance-none border rounded mr-2 w-16 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="precio" />
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Capacidad del evento
                    </label>
                    <input defaultValue={props.limit} class="mr-2 w-16 shadow appearance-none border rounded   px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type='number' placeholder="capacidad del evento" />
                  </div>

                  <div className="mt-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Descripción
                    </label>
                    <textarea defaultValue={props.description} className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none" />
                  </div>
                  <div className="flex flex-wrap items-center justify-between mt-4">

                    <button type='submit' className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Confirmar Edición</button>
                    <button onClick={() => setPopUpHandler(!true)} className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                      Cancel
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div> : ""}

      {/* FIN MODAL EDIT EVENT*/}
      <tr className=" h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
        <td className="pl-4 cursor-pointer">
          <div className="flex items-center">
            <div className="w-10 h-10">
              <img className="w-full h-full" src={props.images} alt='Nombre del Evento' />
            </div>
            <div className="pl-4">
              <p className="font-medium">{props.name}</p>
              {props?.authors.map(author =>
                <p className="text-xs leading-3 text-gray-600 pt-2">{author}</p>)}
            </div>
          </div>
        </td>
        <td className="pl-12">
          <p className="font-medium">Límite {props.limit}</p>
          <p className="text-xs leading-3 text-gray-600 mt-2">{props?.attendance.length} asistentes confirmados</p>
        </td>
        <td className="pl-20">
          <p className="font-medium">${props.price}</p>
          <p className="text-xs leading-3 text-gray-600 mt-2"></p>
        </td>
        <td className="pl-20" >
          <p className="font-medium">{new Date(props.date).toLocaleDateString("es-ES", options)}</p>
          <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
        </td>
        <td className="pl-16">
          <div className="flex items-center">
            <img className="shadow-md w-8 h-8 rounded-full" src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png" alt='Presentador' />
          </div>
        </td>
        <td td className="px-7 2xl:px-0" >
          {
            show === 0 ? <button onClick={() => setShow(null)} className="focus:outline-none pl-7">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button> : <button onClick={() => setShow(0)} className="focus:outline-none pl-7">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                <path d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          }
          {
            show === 0 &&
            <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 " >
              <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white" onClick={() => setShowModal(true)}>
                <p >Ver Detalles</p>
              </div>
              <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white" onClick={() => setPopUpHandler(true)}>
                <p>Editar</p>
              </div>
              <div onClick={deleteEvent} className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                <p>Eliminar</p>
              </div>
            </div>
          }
        </td >
      </tr>

    </>


  )
}

export default Calendar

