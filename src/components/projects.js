import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './projects.css'

import jamming from '../assets/images/jamming-app.PNG';
import bhr from '../assets/images/bhr-home.PNG';
import weather from '../assets/images/weather-app.PNG';

function Projects() {
    
    return (
        <Swiper
            cssMode={true}
            pagination={{
                clickable: true
            }}
            grabCursor={true}
            loop={true}
            modules={[Pagination]}
            breakpoints={{
            500: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            650: {
                slidesPerView: 3,
                spaceBetween: 60,
            }
            }}
            className='swiper'
        >
            <a href='https://eli-jones-jammming.netlify.app' target='blank'><SwiperSlide className='swiper-slide'><img src={jamming} alt='Jamming app'/><p>Jamming App ~ Spotify API</p></SwiperSlide></a>
            <a href='https://eli-jones-bhr.netlify.app/' target='blank'><SwiperSlide className='swiper-slide'><img src={bhr} alt='Pet Rescue Site'/><p>Pet Rescue Site ~ React</p></SwiperSlide></a>
            <a href='https://eli-jones-weather.netlify.app/' target='blank'><SwiperSlide className='swiper-slide'><img src={weather} alt='Weather App'/><p>Weather App ~ Open Weather API</p></SwiperSlide></a>
        </Swiper>
    )
    
}

export { Projects };
