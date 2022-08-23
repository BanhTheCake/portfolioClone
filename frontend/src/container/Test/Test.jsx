import React from "react";
import './Test.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import { images } from "../../constants";

const Test = () => {
  return (
    <div className="app__test">
        <Swiper className="app__swiper" 
        slidesPerView={1}
        loop={true}
        breakpoints={{
            376: {
                slidesPerView: 2,
            }
        }}
        // slidesPerGroup={2}
        >
            <SwiperSlide>
                <div className="app__item">
                <img src={images.amazon} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="app__item">
                <img src={images.nb} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="app__item">
                <img src={images.skype} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="app__item">
                <img src={images.spotify} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Test;
