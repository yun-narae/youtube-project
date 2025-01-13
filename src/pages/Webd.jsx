import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { webdText } from '../data/webd';
import VideoCard from '../components/videos/VideoCard';

const Webd = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    const webdPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main
            title="웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다."
        >
            <VideoCard
                className={webdPageClass}
                id="webd"
                videos={webdText}
                title="웹디자인 기능사 준비는 이걸로!"
                // breakpoint, mobileCount, desktopCount 동적으로 페이지에 따라 적용 예시
                breakpoint={360} // 이하에서 모바일로 처리
                mobileCount={15} // 모바일에서 15개씩 로드
                desktopCount={20} // 데스크탑에서 20개씩 로드
            />
        </Main>
    );
};

export default Webd;
