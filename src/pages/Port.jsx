import React from 'react'
import Main from '../components/section/Main'
import { portfolioText } from '../data/portfolio'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <Main 
            title = "포트폴리오 사이트"
            description="포트폴리오 사이트 튜토리얼 강의입니다."
        >
            <section id='portfolio'>
                <h2>포트폴리오 만드는 방법</h2>
                <div className='video__inner'>
                    {portfolioText.map((video, key) => 
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

export default Portfolio