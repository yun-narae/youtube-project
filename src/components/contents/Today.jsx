import React from 'react'
import { Link } from 'react-router-dom'
import { todayText } from '../../data/Today'

const Today = () => {
  return (
    <section id='today'>
        <div className='today__inner'>
            <div className='today__thumb'>
                <Link to={todayText[0].page}>
                    <img src={todayText[0].img} alt={todayText[0].title} />
                </Link>
            </div>
            <div className='today__text'>
                <span className='today'>today</span>
                <Link to={todayText[0].page}>
                    <h3 className='title'>{todayText[0].title}</h3>
                    <p className='desc'>{todayText[0].desc}</p>
                </Link>
                <div className='info'>
                    <Link to={`/channel/${todayText[0].channelId}`}>
                        <span className='author'>{todayText[0].author}</span>
                    </Link>
                    <span className='date'>{todayText[0].date}</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Today