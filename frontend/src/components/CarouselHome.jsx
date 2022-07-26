import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../styles/carouselhome.css";

// import required modules
import { EffectCards } from "swiper";


const CarouselHome = () => {
  const allEvents = useSelector(store => store.eventsReducer.events)
  const futureEvents = allEvents.slice(0, 5)

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {futureEvents?.map((item, index) =>
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url("${item?.images}")`,
                backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
              }} className="imgCubo "
            > <h4 className="title-cube">{item.name}</h4> </div>

          </SwiperSlide>
        )}
      </Swiper>
    </>
  )
}

export default CarouselHome