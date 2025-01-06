import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { youtubeText } from '../data/youtube'
import VideoCard from '../components/videos/VideoCard'

const Youtube = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);

    // isLoading에서 0.5초 후에 isLoaded로 바뀐다.
    // 실제 데이터 로딩 시간무관하고 애니메이션을 주기위한 작업
    // 섹션 로딩 소스 _common.scss
    const youtubePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "유튜브 사이트"
            description="유튜브 사이트 튜토리얼 강의입니다."
        >
            <VideoCard className={youtubePageClass} id="youtube" videos={youtubeText} title="유튜브 사이트 만들기"/>
        </Main>
    )
}

export default Youtube