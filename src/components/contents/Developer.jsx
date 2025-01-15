import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const Developer = ({ videos, title, id }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <section id={id}>
            <h2>{title}</h2>
            <div className="developer__inner">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    slidesPerView={4}
                    spaceBetween={15}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 15,
                        },
                        1240: {
                            slidesPerView: 8,
                            spaceBetween: 15,
                        },
                        1640: {
                            slidesPerView: 9,
                            spaceBetween: 20,
                        },
                        2000: {
                            slidesPerView: 10,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {loading ? 
                        [...new Array(12)].map((_, idx) => (
                              <SwiperSlide key={idx}>
                                  <div className="skeleton-loader skeleton-loader__developer">
                                      <div className="skeleton-thumb"></div>
                                      <div className="skeleton-info"></div>
                                  </div>
                              </SwiperSlide>
                          ))
                        : videos.map((developer, key) => (
                              <SwiperSlide key={key}>
                                  <div className="developer">
                                      <div className="developer__img play__icon">
                                          <Link to={`/channel/${developer.channelId}`}>
                                              <img src={developer.img} alt={developer.name} />
                                          </Link>
                                      </div>
                                      <div className="developer__info">
                                          <Link to={`/channel/${developer.channelId}`}>
                                              {developer.name}
                                          </Link>
                                      </div>
                                  </div>
                              </SwiperSlide>
                          ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Developer;
