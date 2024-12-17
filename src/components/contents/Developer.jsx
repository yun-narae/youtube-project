import React from 'react'
import { Link } from 'react-router-dom'
import { developerText } from '../../data/developer'


const Developer = () => {
    return (
        <section id='developer'>
            <h2>추천 개발자</h2>
            <div className='developer__inner overflow'>
                {developerText.map((developer, key) => 
                    <div className='developer' key={key}>
                            <div className="developer__img play__icon">
                                <Link to={`/channel/${developer.channelId}`}>
                                        <img src={developer.img} alt={developer.name} />
                                </Link>
                            </div>
                            <Link to={`/channel/${developer.channelId}`}>
                                <p>{developer.name}</p>
                            </Link>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Developer