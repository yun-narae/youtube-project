import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({ videos }) => {
  return (
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
  )
}

export default VideoCard