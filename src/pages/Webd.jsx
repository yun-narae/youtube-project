import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { webdText } from '../data/webd'
import VideoCard from '../components/videos/VideoCard';

const Webd = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);

    // isLoading에서 0.5초 후에 isLoaded로 바뀐다.
    // 실제 데이터 로딩 시간무관하고 애니메이션을 주기위한 작업
    // 섹션 로딩 소스 _common.scss
    const webdPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다."
        >
            <VideoCard className={webdPageClass} id="webd" videos={webdText} title="웹디자인 기능사 준비는 이걸로!"/>
        </Main>
    )
}

export default Webd