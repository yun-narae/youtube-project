import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadMoreButton from '../Button/LoadMoreButton';

const VideoCard = ({ videos = [], title, id, className }) => {
    const [displayedVideos, setDisplayedVideos] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

    // 화면 크기 감지 (반응형 처리)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 780);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 초기 비디오 개수와 버튼 상태 설정
    useEffect(() => {
        const initialCount = isMobile ? 10 : 20;
        setDisplayedVideos(videos.slice(0, initialCount)); // 초기 비디오 설정
        setShowMore(videos.length > initialCount); // "더보기" 버튼 활성화 조건
    }, [videos, isMobile]);

    const handleLoadMore = () => {
        const currentCount = displayedVideos.length;
        const loadCount = isMobile ? 10 : 20; // 더보기 로드 개수 결정
        const nextVideos = videos.slice(currentCount, currentCount + loadCount);
        setDisplayedVideos((prev) => [...prev, ...nextVideos]); // 기존 비디오에 추가
        if (currentCount + nextVideos.length >= videos.length) {
            setShowMore(false); // 모든 비디오가 로드되면 버튼 숨김
        }
    };

    return (
        <section id={id} className={className}>
            <h2>{title}</h2>
            <div className="video__inner">
                {displayedVideos.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video_thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {showMore && (
                <div className="video__more">
                    <LoadMoreButton onClick={handleLoadMore} loading={false} />
                </div>
            )}
        </section>
    );
};

export default VideoCard;
