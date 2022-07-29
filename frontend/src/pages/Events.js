import React from "react";
import '../styles/Events.css'
import eventsActions from "../redux/actions/eventsActions";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Calendar from "../components/Calendar";

function Events() {

    const dispatch = useDispatch()
    const [reload, setReload] = useState(false);

    useEffect(() => {
        dispatch(eventsActions.getEvents())
        // eslint-disable-next-line 
    }, [reload])

    function reloadChanger() {
        setReload(!reload);
    }

    const allEvents = useSelector(store => store.eventsReducer.events)

    return (
        <>
            {/* TABLA DE EVENTOS */}
            <div className="flex justify-center flex-wrap p-5 bg-slate-300 container-master-events">
                <div className="sm:px-6">
                    <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg div-events-title">
                        <div className="sm:flex items-center justify-between div-events-title">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Nuestros Eventos</p>
                            {/* <div>
                                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p className="text-sm font-medium leading-none text-white">Nuevo Evento</p>
                                </button>
                            </div> */}
                        </div>
                    </div>
                    <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                        <div>
                        <tbody className="container-calendar">
                                {allEvents.map((item, i) => <Calendar key={i} props={item} setChangeReload={reloadChanger} />)}
                            </tbody>
                        </div>
                        {/* <table className="w-full whitespace-nowrap" >
                            <thead>
                                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                    <th className="font-normal text-left pl-4">Evento</th>
                                    <th className="font-normal text-left pl-12">Progress</th>
                                    <th className="font-normal text-left pl-12">Asistencia</th>
                                    <th className="font-normal text-left pl-20">Precio</th>
                                    <th className="font-normal text-left pl-20">Fecha</th>
                                    <th className="font-normal text-left pl-16">Presentador</th>
                                </tr>
                            </thead>
                           
                        </table> */}
                    </div>

                </div >
            </ div >
        </>
    );
}
export default Events;