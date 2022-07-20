import React from "react";
import Carousel from '../components/Carousel'
import '../styles/Events.css'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import eventsActions from '../redux/actions/eventsActions'


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

    const currentEvents = useSelector(store => store.eventsReducer.events)
    console.log(currentEvents)

    return (
        <>
      <div className="container-events"> 
      <div className="title-events">
                <h2>
                    Nuestros Eventos
                </h2>
            </div>
            <div>
            <Carousel />
            </div>

      </div>
            
        </>
    );
}
export default Events;