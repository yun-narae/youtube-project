import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ videos, title, id, className }) => {
  return (
    <section id={id} className={className}>
        <h2>{title}</h2>
        <div className='video__inner'>
            {videos.map((video, key) => 
                <div className='video' key={key}>
                    <div className='video_thumb play__icon'>
                        <Link to={`video/${video.videoId}`}>
                            <img src={video.img} alt={video.title}  />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    </section>
  )
}

export default VideoCard