import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Proyecto = ( {images} ) => {
    return (
    <main>
      <Swiper modules={[Pagination, Navigation]}
      spaceBetween={30}
      navigation
      pagination={{ clickable: true }}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.imgSrc} alt={`Proyecto ${index + 1}`} 
            className="w-100 h-50 object-cover object-center rounded-[12px]"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
    );
};

export default Proyecto;