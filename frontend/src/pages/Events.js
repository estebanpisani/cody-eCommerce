import React from "react";
import Gallery from '../components/Gallery'
import '../styles/Events.css'
import eventsActions from "../redux/actions/eventsActions";
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import NoEvents from "../components/NoEvents";


function Events() {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(eventsActions.getEvents())
    //     if(localStorage.getItem('token')!==null){
    //       const token = localStorage.getItem("token")
    //       dispatch(userActions.VerificateToken(token))
    },[]
// }
    )

    const allEvents = useSelector(store => store.eventsReducer.events)
    console.log(allEvents)

    return (
        <>
      <div className="container-events"> 
      <div className="title-events">
                <h2>
                    Nuestros Eventos
                </h2>
            </div>

            {allEvents?.length > 0 ? (
                <div>
                <Gallery allEvents={allEvents}/>
                </div>
            ) :( 
                <NoEvents />
            ) }
            

      </div>
            
        </>
    );
}
export default Events;