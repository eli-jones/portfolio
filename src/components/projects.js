import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './projects.css'

import jamming from '../assets/images/jamming-app.PNG';
import bhr from '../assets/images/bhr-home.PNG';
import weather from '../assets/images/weather-app.PNG';

function Projects() {
    
    const swiper = new Swiper('.swiper', {
        modules: [Pagination],
        grabCursor: true,
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            650: {
                slidesPerView: 3,
                spaceBetween: 60,
            }
        }
    })

    return swiper;
    
    return (
        <div className='swiper'>
            <div className='swiper-wrapper'>
                <div className='swiper-slide'><a href='https://eli-jones-jammming.netlify.app' target='blank'><img src={jamming} alt='Jamming app'/><p>Jamming App ~ Spotify API</p></a></div>
                <div className='swiper-slide'><a href='https://eli-jones-bhr.netlify.app/' target='blank'><img src={bhr} alt='Pet Rescue Site'/><p>Pet Rescue Site ~ React</p></a></div>
                <div className='swiper-slide'><a href='https://eli-jones-weather.netlify.app/' target='blank'><img src={weather} alt='Weather App'/><p>Weather App ~ Open Weather API</p></a></div>
            </div>
            <div className='swiper-pagination'></div>
        </div>
    )
    
}

export { Projects };
