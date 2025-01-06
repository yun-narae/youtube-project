import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { portfolioText } from '../data/portfolio'
import VideoCard from '../components/videos/VideoCard'

const Portfolio = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);

    // isLoading에서 0.5초 후에 isLoaded로 바뀐다.
    // 실제 데이터 로딩 시간무관하고 애니메이션을 주기위한 작업
    // 섹션 로딩 소스 _common.scss
    const portPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "포트폴리오 사이트"
            description="포트폴리오 사이트 튜토리얼 강의입니다."
        >
            <VideoCard className={portPageClass} id="portfolio" videos={portfolioText} title="포트폴리오 만드는 방법"/>
        </Main>
    )
}

export default Portfolio