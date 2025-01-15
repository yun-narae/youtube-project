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

    return (
        <Main 
            title = "유튜브 사이트"
            description="유튜브 사이트 튜토리얼 강의입니다."
        >
            <VideoCard 
                id="youtube"
                loading={loading}
                videos={youtubeText}
                title="유튜브 사이트 만들기"
            />
        </Main>
    )
}

export default Youtube