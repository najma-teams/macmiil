import "./outdoor.css";
import outdourimage from "/public/images/flower.png";
import { Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getproductfn } from "../../../redux/slice/productSlice/getAllProduct"
import { getAllCatoryfn } from "@/redux/slice/Catorey/Catorey";

const Catogeyfitness = () => {
  const dispatch = useDispatch();
  const getproduct = useSelector((state) => state.getproduct);
  // console.log(getproduct)
  const da = getproduct.data?.result;

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getproductfn());
  }, []);

  // Define the number of slides per view based on screen size
  const getSlidesPerView = () => {
    if (window.innerWidth < 600) {
      return 1;
    } else {
      return 6;
    }
  };

  const getallcatory = useSelector((state) => state.getallcatory);
  useEffect(() => {
   dispatch(getAllCatoryfn());
 }, []);

 const getCat = getallcatory?.data?.result

  return (
    <div className="m-10 bg-[#fcf9f9]">

<div className=" bg-white  w-[20%] text-center text-2xl text-black  font-bold  cursor-pointer">
              <button> Iphone </button>
            </div>
      <div className="bg-white w-[10%] ml-[90%] items-center text-center text-black font-semibold cursor-pointer">
        <button> View All</button>
      </div>
      <Swiper
        slidesPerView={getSlidesPerView()}
        spaceBetween={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[100%]"
      >
        {/* fitness */}
        {getproduct.data?.result &&
          getproduct.data?.result
            .filter(product => product.category?.cato === "iphone")
            .map(product => (
              <SwiperSlide className="m-1" key={product.id}>
                <div className="p-3">
                <div className="w-[100%] h-[200px]">
                  <img
                    src={product.image}
                    alt=""
                    className="object-cover w-[50%] h-full"
                  />
                </div>
                  <div className="mt-4">
                    <h6 className="text-[15px] px-2">{product.Name}</h6>
                    <div className="flex justify-around items-center">
                      <p>${product.price}</p>
                      <p className="bg-green-500 p-2 rounded-md text-white">
                      {product?.category?.cato}</p>
                    </div>
                    <p className='rating'>
                      <i className='icofont-star text-yellow-500'></i>
                      <i className='icofont-star text-yellow-500'></i>
                      <i className='icofont-star text-yellow-500'></i>
                      <i className='icofont-star text-yellow-500'></i>
                      <i className='icofont-star text-yellow-500'></i>
                      {/* <span>{product.ratingsCount} review</span> */}
                      <span> review</span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default Catogeyfitness;