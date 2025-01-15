import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { gsapText } from '../data/gsap'
import VideoCard from '../components/videos/VideoCard'

const Gsap = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);

    return (
        <Main 
            title = "GSAP 사이트"
            description="GSAP 사이트 튜토리얼 강의입니다."
        >
            <VideoCard
                id="gsap"
                loading={loading}
                videos={gsapText}
                title="GSAP 기초 다지기!"/>
        </Main>
    )
}

export default Gsap