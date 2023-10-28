import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
export const InstFree = () => {
  return (
    <>
      <div className="flex items-center justify-center font-kosugi text-5xl h-20">
        <p className="text-center bg-gray-300 rounded-xl">せつめい</p>
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-2/3 border border-black"
      >
        <SwiperSlide className="h-screen">
          <div className="h-full flex justify-center items-center">
            <img
              className="h-2/3 w-2/3 object-cover"
              src="/free1.jpg"
              alt="free1"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-screen">
          <div className="h-full flex justify-center items-center">
            <img
              className="h-2/3 w-2/3 object-cover"
              src="/free2.jpg"
              alt="free2"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-screen">
          <div className="h-full flex justify-center items-center">
            <img
              className="h-2/3 w-2/3 object-cover"
              src="/free3.jpg"
              alt="free3"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-screen">
          <div className="h-full flex justify-center items-center">
            <img
              className="h-2/3 w-2/3 object-cover"
              src="/free4.jpg"
              alt="free4"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center">
        <Link to="/CopyrightFree">
          <button className="bg-gray-300 rounded-full font-kosugi btn text-2xl mt-8">
            Homeに移動
          </button>
        </Link>
      </div>
    </>
  );
};
