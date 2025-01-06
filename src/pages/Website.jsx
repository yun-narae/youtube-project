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

    // isLoading에서 0.5초 후에 isLoaded로 바뀐다.
    // 실제 데이터 로딩 시간무관하고 애니메이션을 주기위한 작업
    // 섹션 로딩 소스 _common.scss
    const websidePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "웹표준 사이트"
            description="웹표준 사이트 튜토리얼 강의입니다."
            >
            <VideoCard className={websidePageClass} id="website" videos={websiteText} title="웹표준 사이트 만들기 기초 다지기!"/>
        </Main>
    )
}

export default Website