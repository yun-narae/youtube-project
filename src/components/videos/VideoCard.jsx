import React from 'react';
import VideoMoreList from './VideoMoreList';  // 더보기 기능을 처리하는 VideoMoreList 컴포넌트 임포트

const VideoCard = ({ videos = [], title, id, className, breakpoint = 360, mobileCount = 10, desktopCount = 20 }) => {

    return (
        <section id={id} className={className}>
            <h2>{title}</h2>
            {/* VideoMoreList를 사용하여 비디오 리스트를 렌더링하고, 더보기 기능도 처리 */}
            <VideoMoreList
                items={videos}  // 비디오 목록
                breakpoint={breakpoint}  // 화면 크기에 따른 분기점 설정
                mobileCount={mobileCount}  // 모바일에서 보여줄 비디오 개수
                desktopCount={desktopCount}  // 데스크탑에서 보여줄 비디오 개수
            />
        </section>
    );
};

export default VideoCard;
