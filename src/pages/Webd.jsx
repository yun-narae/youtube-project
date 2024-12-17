import React from 'react'
import Main from '../components/section/Main'
import { webdText } from '../data/webd'
import { Link } from 'react-router-dom'

const Webd = () => {
    return (
        <Main 
            title = "웹디자인 기능사"
            description="웹디자인 기능사 튜토리얼 강의입니다."
        >
            <section id='webd'>
                <h2>웹디자인 기능사 준비는 이걸로!</h2>
                <div className='video__inner'>
                    {webdText.map((video, key) => 
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

export default Webd