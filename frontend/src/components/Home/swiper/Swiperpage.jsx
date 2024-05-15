import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Swiperpage = () => {
  const outdoor = [
    {
      "id": "96fd22a5-f22f-4ad8-b7b5-f1cfd0852553",
      "category": "Bottle",
      "name": "Steel Metal Bottle 1 L",
      "seller": "Addidas",
      "price": 46,
      "stock": 2,
      "ratings": 5,
      "ratingsCount": 73,
      "img": "/public/images/swiper1.png",
      "shipping": 45,
      "quantity": 0
  },
  {
      "id": "e1a7c529-f91b-4ef5-a661-c2317c5c314e",
      "category": "Bottle",
      "name": "Steel Metal Bottle 1L",
      "seller": "Addidas",
      "price": 20,
      "stock": 14,
      "ratings": 5,
      "ratingsCount": 63,
      "img": "/public/images/swiper2.png",
      "shipping": 21,
      "quantity": 0
  },
  {
    "id": "e1a7c529-f91b-4ef5-a661-c2317c5c314e",
    "category": "Bottle",
    "name": "Steel Metal Bottle 1L",
    "seller": "Addidas",
    "price": 20,
    "stock": 14,
    "ratings": 5,
    "ratingsCount": 63,
    "img": "/public/images/swiper3.png",
    "shipping": 21,
    "quantity": 0
},
  
  ];
  return (
    <div className=' w-[94%] mx-auto mt-5 '>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
              {outdoor.map((product) => (
          <SwiperSlide className="  " >
            
          
           
          <div className=" ">
          <img  src={product.img} alt=""  />  
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Swiperpage