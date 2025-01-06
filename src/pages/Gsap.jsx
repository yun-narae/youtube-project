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

    // isLoading에서 0.5초 후에 isLoaded로 바뀐다.
    // 실제 데이터 로딩 시간무관하고 애니메이션을 주기위한 작업
    // 섹션 로딩 소스 _common.scss
    const gsapPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "GSAP 사이트"
            description="GSAP 사이트 튜토리얼 강의입니다."
        >
            <VideoCard className={gsapPageClass} id="gsap" videos={gsapText} title="GSAP 기초 다지기!"/>
        </Main>
    )
}

export default Gsap