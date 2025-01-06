import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../components/section/Main'
import { developerText } from '../data/developer'

const Developer = () => {
    return (
        <Main 
            title = "추천 개발자"
            description="오늘의 추천 개발자 유튜버입니다."
        >
            <section id='developerPage'>
                <h2>추천 개발자</h2>
                <div className='developer__inner'>
                    {developerText.map((developer, key) => 
                        <div className='developer' key={key}>
                                <div className="developer__img play__icon">
                                    <Link to={`/channel/${developer.channelId}`}>
                                            <img src={developer.img} alt={developer.name} />
                                    </Link>
                                </div>
                                <div className="developer__info">
                                    <Link to={`/channel/${developer.channelId}`}>
                                        <p>{developer.name}</p>
                                    </Link>
                                </div>
                        </div>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Developer