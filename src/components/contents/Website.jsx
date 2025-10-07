import React from 'react'
import { websiteText } from '../../data/website'
import { Link } from 'react-router-dom'

const Website = () => {
  return (
    <section id='website'>
        <h2>웹표준 사이트 만들기 기초 다지기</h2>
        <div className='video__inner'>
            {websiteText.map((video, key) => 
                <div className='video' key={key}>
                    <div className='video_thumb'>
                        <Link to={`/video/${video.videoId}`}>
                            <img src={video.img} alt={video.title}  />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    </section>
  )
}

export default Website