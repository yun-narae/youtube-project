import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../components/section/Main';
import { developerText } from '../data/developer';
import LoadMoreButton from '../components/Button/LoadMoreButton';

const Developer = () => {
    const [loading, setLoading] = useState(true);
    const [displayedDevelopers, setDisplayedDevelopers] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    // 화면 크기 감지 (반응형 처리)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 780);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 초기 데이터 설정
    useEffect(() => {
        const initialCount = isMobile ? 10 : 20;
        setDisplayedDevelopers(developerText.slice(0, initialCount));
        setShowMore(developerText.length > initialCount);
    }, [isMobile]);

    // "더보기" 클릭 핸들러
    const handleLoadMore = () => {
        const currentCount = displayedDevelopers.length;
        const loadCount = isMobile ? 10 : 20;
        const nextDevelopers = developerText.slice(currentCount, currentCount + loadCount);
        setDisplayedDevelopers((prev) => [...prev, ...nextDevelopers]);

        if (currentCount + nextDevelopers.length >= developerText.length) {
            setShowMore(false);
        }
    };

    return (
        <Main
            title="추천 개발자"
            description="오늘의 추천 개발자 유튜버입니다."
        >
            <section id="developerPage">
                <h2>추천 개발자</h2>
                    {loading ? (
                        // 로딩 중일 때 스켈레톤 UI 표시
                        <div className="skeleton-inner__developerPage">
                            {[...new Array(12)].map((_, idx) => (
                                <div key={idx} className="skeleton-loader skeleton-loader__developerPage">
                                    <div className="skeleton-thumb"></div>
                                    <div className="skeleton-info"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // 데이터 로딩이 완료되면 실제 개발자 리스트 표시
                        <div className="developer__inner">
                        {displayedDevelopers.map((developer, key) => (
                            <div className="developer" key={key}>
                                <div className="developer__img play__icon">
                                    <Link to={`/channel/${developer.channelId}`}>
                                        <img src={developer.img} alt={developer.name} />
                                    </Link>
                                </div>
                                <div className="developer__info">
                                    <Link to={`/channel/${developer.channelId}`}>
                                        <p>{developer.name}</p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    )}
                {showMore && !loading && (
                    <div className="video__more">
                        <LoadMoreButton onClick={handleLoadMore} loading={false} />
                    </div>
                )}
            </section>
        </Main>
    );
};

export default Developer;
