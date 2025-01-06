import React from 'react'
import Main from '../components/section/Main'
import { gsapText } from '../data/gsap'
import { Link } from 'react-router-dom'

const Gsap = () => {
    return (
        <Main 
            title = "GSAP 사이트"
            description="GSAP 사이트 튜토리얼 강의입니다."
        >
            <section id='gsap'>
                <h2>웹표준 사이트 만들기 기초 다지기</h2>
                <div className='video__inner'>
                    {gsapText.map((video, key) => 
                        <div className='video' key={key}>
                            <div className='video_thumb play__icon'>
                                <Link to={video}>
                                    <img src={video.img} alt={video.title}  />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Gsap