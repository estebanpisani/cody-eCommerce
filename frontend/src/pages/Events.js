import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Calendar from "../components/Calendar";
import eventsActions from "../redux/actions/eventsActions";
import '../styles/Events.css'

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
            <div className="container-master-events flex flex-col justify-center flex-wrap p-3 container mx-auto">
                <div className="events-title w-full rounded-tl-lg rounded-tr-lg border sm:flex items-center justify-between p-2">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Nuestros Eventos</h2>
                </div>
                <div className="bg-white w-full rounded-bl-lg rounded-br-lg shadow overflow-y-auto flex flex-col p-3">
                    {allEvents?.map((item, i) => <Calendar key={i} props={item} setChangeReload={reloadChanger} />)}
                </div>
            </ div >
        </>
    );
}
export default Events;