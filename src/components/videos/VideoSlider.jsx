// src/components/videos/VideoSlider.jsx
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useTheme } from '../../contexts/theme';
import Icon from '../Icon/Icon';

const VideoSlider = ({ videos, title, id }) => {
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(t);
    }, []);

    const {
        textColor,
        Skeleton: { SkeletonbackgroundColor, SkeletoncardbackgroundColor},
    } = theme;

    const styles = {
        textColor: { color: textColor },
        skeletonLoader: { backgroundColor: SkeletonbackgroundColor },
        skeletonCard: { backgroundColor: SkeletoncardbackgroundColor },
    };

    return (
        <section id={id}>
            <h2 style={styles.textColor}>{title}</h2>

            <div className="video__slider">
                {/* 커스텀 네비 버튼 */}
                <button
                    type="button"
                    className="swiper-nav swiper-prev"
                    ref={prevRef}
                    aria-label="이전 슬라이드"
                >
                    <Icon name="arrow-left" size={30} className="play__icon" />
                </button>

                <button
                    type="button"
                    className="swiper-nav swiper-next"
                    ref={nextRef}
                    aria-label="다음 슬라이드"
                >
                    <Icon name="arrow-right" size={30} className="play__icon" />
                </button>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    modules={[Navigation]}
                    // 내 버튼을 사용하도록 Swiper에 연결
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    onInit={(swiper) => {
                        // 마운트 후 다시 초기화하여 버튼 연결 보장
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    className={`mySwiper-${id}`}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024:{ slidesPerView: 4, spaceBetween: 20 },
                        1600:{ slidesPerView: 5, spaceBetween: 20 },
                    }}
                >
                    {loading
                        ? [...new Array(12)].map((_, idx) => (
                              <SwiperSlide key={idx}>
                                  <div className="skeleton-loader skeleton-loader__video" style={styles.skeletonLoader}>
                                      <div className="skeleton-thumb" style={styles.skeletonCard}></div>
                                  </div>
                              </SwiperSlide>
                          ))
                        : videos.map((video, key) => (
                              <SwiperSlide key={key}>
                                  <div className="video">
                                      <div className="video__thumb play__icon-frame">
                                          <Link to={`/video/${video.videoId}`}>
                                              <img src={video.img} alt={video.title} />
                                              <Icon name="play" size={40} className="play__icon" />
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

export default VideoSlider;
