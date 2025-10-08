import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

import { todayText } from '../data/Today'
import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'
import { developerText } from '../data/developer'

const Home = () => {
    return (
        <Main 
            title = "개발자 유튜브"
            description="개발자들을 위한 유튜브 사이트에 오신 것을 환영합니다.">
            <div id="home">
                <Today videos={todayText} title="오늘의 추천 영상" />
                <Developer videos={developerText} title="추천 개발자" id="developer"/>
                <VideoSlider videos={webdText} title="웹디자인기능사 준비는 이걸로!" id="webd" />
                <VideoSlider videos={websiteText} title="웹표준 사이트 만들기 기초 다지기" id="website" />
                <VideoSlider videos={gsapText} title="GSAP 패럴랙스 효과를 하고 싶다면!" id="gsap" />
                <VideoSlider videos={portfolioText} title="포트폴리오 만드는 방법을 공유합니다." id="portfolio" />
                <VideoSlider videos={youtubeText} title="유튜브 사이트 만들기" id="youtube" />
            </div>
        </Main>
    )
}

export default Home