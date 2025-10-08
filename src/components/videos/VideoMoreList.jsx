import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadMoreButton from '../Button/LoadMoreButton';
import Icon from '../Icon/Icon';

const VideoMoreList = ({ items, breakpoint = 780, mobileCount = 10, desktopCount = 20, theme }) => {
    const [displayedItems, setDisplayedItems] = useState([]); // 비디오 아이템을 화면에 표시할 상태
    const [showMore, setShowMore] = useState(false); // "더보기" 버튼의 표시 여부 상태 
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint); // 현재 화면 크기가 모바일인지 확인하는 상태

    // 화면 크기가 변경될 때마다 모바일 여부를 업데이트
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= breakpoint);
        };

        // 리사이즈 이벤트 리스너 등록
        window.addEventListener('resize', handleResize);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    // 화면 크기 또는 비디오 목록이 변경될 때마다 표시할 비디오 개수를 설정
    useEffect(() => {
        const initialCount = isMobile ? mobileCount : desktopCount;
        setDisplayedItems(items.slice(0, initialCount));  // 초기 표시할 비디오 목록 설정
        setShowMore(items.length > initialCount);  // "더보기" 버튼 활성화 여부 설정
    }, [isMobile, items, mobileCount, desktopCount]);

    // "더보기" 버튼 클릭 시 추가 비디오를 로드
    const handleLoadMore = () => {
        const currentCount = displayedItems.length;
        const loadCount = isMobile ? mobileCount : desktopCount;
        const nextItems = items.slice(currentCount, currentCount + loadCount);  // 추가로 로드할 비디오 아이템

        setDisplayedItems((prev) => [...prev, ...nextItems]);  // 기존에 표시된 비디오 아이템에 추가
        if (currentCount + nextItems.length >= items.length) {
            setShowMore(false);  // 모든 비디오가 로드되면 "더보기" 버튼 숨기기
        }
    };

    return (
        <>
            {/* 표시할 비디오 아이템들 */}
            <div className="video__inner">
                {displayedItems.map((item, index) => (
                    <div key={index} className="video">
                        <div className="video_thumb play__icon-frame">
                            <Link to={`/video/${item.videoId}`}>
                                <img src={item.img} alt={item.title} />
                                <Icon
                                    name="play"
                                    size={40}
                                    className="play__icon"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {/* "더보기" 버튼, 아직 로드할 비디오가 남아있으면 표시 */}
            {showMore && (
                <div className="video__more">
                    <LoadMoreButton onClick={handleLoadMore} loading={false} theme={theme}/>  {/* 더보기 버튼 클릭 시 handleLoadMore 실행 */}
                </div>
            )}
        </>
    );
};

export default VideoMoreList;
