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

    return (
        <Main 
            title = "포트폴리오 사이트"
            description="포트폴리오 사이트 튜토리얼 강의입니다."
        >
            <VideoCard 
                id="portfolio"
                loading={loading}
                videos={portfolioText}
                title="포트폴리오 만드는 방법"
            />
        </Main>
    )
}

export default Portfolio