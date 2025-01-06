import React from 'react'
import { Link } from 'react-router-dom'

const VideoSlider = ({ videos, title, id }) => {
    return (
        <section id={id} >
            <h2>{title}</h2>
            <div className='video__inner'>
                {videos.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default VideoSlider