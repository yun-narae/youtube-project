import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';


const VideoCard = ({ videos = [], title, id, className }) => {
    const [displayedVideos, setDisplayedVideos] = useState([]);
    const [showMore, setShowMore] = useState(false);

    // 초기 상태 설정
    useEffect(() => {
        if (Array.isArray(videos)) {
            setDisplayedVideos(videos.slice(0, 20)); // 초기 20개만 표시
            setShowMore(videos.length > 20); // "더보기" 버튼 활성화 조건
        }
    }, [videos]);

    const handleLoadMore = () => {
        const currentCount = displayedVideos.length;
        const nextVideos = videos.slice(currentCount, currentCount + 20);
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
