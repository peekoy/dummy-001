import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import room from "../assets/Room.png"
import pintu from "../assets/pintu1.jpg"

const uncontrolCars = () => {
  return (
    <Carousel className="w-min mt-20 lg:mt-40 mx-6 sm:mx-10 lg:mx-20 xl:mx-40">
      <div className=''>
        <img className='scale-100' src={room} />
          <p className="legend">Porto 1</p>
      </div>
      <div>
        <img className="scale-75" src={pintu} />
          <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  )

}

export default uncontrolCars