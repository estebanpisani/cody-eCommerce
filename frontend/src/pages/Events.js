import React from "react";
import Carousel from '../components/Carousel'
import '../styles/Events.css'

function Events() {
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