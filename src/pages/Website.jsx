import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { websiteText } from '../data/website'
import VideoCard from '../components/videos/VideoCard'

const Website = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);

    return (
        <Main 
            title = "웹표준 사이트"
            description="웹표준 사이트 튜토리얼 강의입니다."
            >
            <VideoCard 
                id="website"
                loading={loading}
                videos={websiteText}
                title="웹표준 사이트 만들기 기초 다지기!"/>
        </Main>
    )
}

export default Website