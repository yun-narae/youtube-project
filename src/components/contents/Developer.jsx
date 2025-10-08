import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useTheme } from '../../contexts/theme';
import Icon from '../Icon/Icon';

const Developer = ({ videos, title, id }) => {
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
        skeletonLoader: { backgroundColor: SkeletonbackgroundColor },
        skeletonCard: { backgroundColor: SkeletoncardbackgroundColor }
    };

    return (
        <section id={id} style={{ color: textColor }}>
            <h2>{title}</h2>
            <div className="developer__inner video__slider">
                {/* 커스텀 이전/다음 버튼 */}
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
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    slidesPerView={4}
                    spaceBetween={15}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // 내 버튼으로 네비게이션 연결
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        640:  { slidesPerView: 5, spaceBetween: 15 },
                        768:  { slidesPerView: 6, spaceBetween: 15 },
                        1024: { slidesPerView: 7, spaceBetween: 15 },
                        1240: { slidesPerView: 8, spaceBetween: 15 },
                        1640: { slidesPerView: 9, spaceBetween: 20 },
                        2000: { slidesPerView: 10, spaceBetween: 20 },
                    }}
                >
                    {loading
                        ? [...new Array(12)].map((_, idx) => (
                              <SwiperSlide key={idx}>
                                  <div className="skeleton-loader skeleton-loader__developer" style={styles.skeletonLoader}>
                                      <div className="skeleton-thumb" style={styles.skeletonCard}></div>
                                      <div className="skeleton-info" style={styles.skeletonCard}></div>
                                  </div>
                              </SwiperSlide>
                          ))
                        : (videos || []).map((developer, key) => (
                              <SwiperSlide key={key}>
                                  <div className="developer">
                                      <div className="developer__img play__icon-frame">
                                          <Link to={`/channel/${developer.channelId}`}>
                                              <img src={developer.img} alt={developer.name} />
                                              <Icon name="play" size={40} className="play__icon" />
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
