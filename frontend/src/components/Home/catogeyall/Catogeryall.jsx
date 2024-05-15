import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getproductfn } from "../../../redux/slice/productSlice/getAllProduct";
import { getAllCatoryfn } from "../../../redux/slice/Catorey/Catorey";


const Catogeryall = () => {
  const dispatch = useDispatch();
  const getproduct = useSelector((state) => state.getproduct);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getproductfn());
  }, []);


  // catory
 const getallcatory = useSelector((state) => state.getallcatory);
 useEffect(() => {
  dispatch(getAllCatoryfn());
}, []);

 console.log(getallcatory)

  return (
    <div className="m-10 bg-[#fcf9f9]">
      <div className=" bg-white  w-[20%] text-center text-2xl text-black  font-bold  cursor-pointer">
              <button> All </button>
            </div>
      <div className="bg-white w-[10%] ml-[90%] items-center text-center text-black font-semibold cursor-pointer">
        <button>View All</button>
      </div>
      <Swiper
        slidesPerView={6}
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
        {getproduct.data?.result &&
          getproduct.data?.result.map((product, index) => (
            <SwiperSlide key={index} className="m-1">
              <div className="">
                <div className="w-[100%] h-[200px]">
                  <img
                    src={product.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="mt-4">
                  <h6 className="text-[15px] px-2">{product.Name}</h6>
                  <div className="flex justify-around items-center">
                    <p>${product.price}</p>
                    <p className="bg-green-500 p-2 rounded-md text-white">
                      {product?.category?.cato}
                    </p>
                  </div>
                  <p className="rating">
                    <i className="icofont-star text-yellow-500"></i>
                    <i className="icofont-star text-yellow-500"></i>
                    <i className="icofont-star text-yellow-500"></i>
                    <i className="icofont-star text-yellow-500"></i>
                    <i className="icofont-star text-yellow-500"></i>
                    {/* <span>{product.ratingsCount} review</span> */}
                    <span>review</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Catogeryall;
