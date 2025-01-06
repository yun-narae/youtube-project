import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const VideoSlider = ({ videos, title, id }) => {
    return (
        <section id={id} >
            <h2>{title}</h2>
            <div className='video__slider'>
            <Swiper 
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className={`mySwiper-${id}`}
            >
                {videos.map((video, key) => (
                    <SwiperSlide key={key}>
                        <div className="video" >
                            <div className="video__thumb play__icon">
                                <Link to={`/video/${video.videoId}`}>
                                    <img src={video.img} alt={video.title} />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </section>
    )
}

export default VideoSlider