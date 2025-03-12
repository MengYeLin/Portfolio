'use client';
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SimpleGallery = () => {
    return (
        <Swiper
            slidesPerView={2}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            slidesPerGroup={2}
            grabCursor={true}
            keyboard={{
                enabled: true,
            }}
            scrollbar={true}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className=""
        >
            <SwiperSlide>
                <img src="/images/torontomagazine1.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/torontomagazine2.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/torontomagazine3.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/torontomagazine4.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/torontomagazine5.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/torontomagazine6.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/torontomagazine7.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/torontomagazine8.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="/images/torontomagazine9.png" />
            </SwiperSlide>
        </Swiper>
    );
}

export default SimpleGallery;
