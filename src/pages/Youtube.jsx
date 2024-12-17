import React from 'react'
import Main from '../components/section/Main'
import { youtubeText } from '../data/youtube'
import { Link } from 'react-router-dom'

const Youtube = () => {
    return (
        <Main 
            title = "유튜브 사이트"
            description="유튜브 사이트 튜토리얼 강의입니다."
        >
            <section id='youtube'>
                <h2>유튜브 사이트 만들기</h2>
                <div className='video__inner'>
                    {youtubeText.map((video, key) => 
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

export default Youtube