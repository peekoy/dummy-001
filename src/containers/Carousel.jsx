import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import room from "../assets/Room.png"
import pintu from "../assets/pintu1.jpg"
import mobil from "../assets/mobil.jpg"

const uncontrolCars = () => {
  return (
    <Carousel className="w-min m-auto mt-20">
      <div className=''>
        <img className='scale-100 rounded-xl' src={room} />
          <p className="legend">Porto 1</p>
      </div>
      <div>
        <img className="scale-75 rounded-xl" src={pintu} />
          <p className="legend">Legend 2</p>
      </div>
      <div>
        <img className="scale-75 rounded-xl" src={mobil} />
          <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  )

}

export default uncontrolCars