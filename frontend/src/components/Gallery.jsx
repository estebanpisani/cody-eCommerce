import '../styles/Carousel.css'
import ModalEvent from './ModalEvent'
import Carousel, { Item } from "react-grid-carousel";



export default function Gallery({ allEvents }) {
  const futureEvents = allEvents.slice(0, 5)



  return (

    <div className='container-carousel'>
      <Carousel
        cols={3}
        rows={1}
        gap={10}
        loop
        mobileBreakpoint={300}
        responsiveLayout={[
          {
            breakpoint: 1024,
            cols: 3,
            rows: 1,
            gap: 10,
            loop: true,
            autoplay: 3000,
          },
          {
            breakpoint: 768,
            cols: 2,
            rows: 1,
            gap: 10,
            loop: true,
            autoplay: 3000,
          },
          {
            breakpoint: 660,
            cols: 1,
            rows: 1,
            gap: 10,
            loop: true,
            autoplay: 3000,
          },
          {
            breakpoint: 480,
            cols: 1,
            rows: 1,
            gap: 10,
            loop: true,
            autoplay: 3000,
          },
        ]}
      >

        {futureEvents.map((everyEvent) => (

          <Carousel.Item>
            <div className="cont-img-carousel">
              <img className="img-carousel" width="100%" src={everyEvent.images} alt={everyEvent.categories} />
              <div className="cont-text-carousel">
                {/* <p className="text-carousel"> */}
                {/* <ModalEvent everyEvent={everyEvent} setChangeReload={setChangeReload} /> */}
                {/* </p> */}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>

  );
}