import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from "react-router-dom";

const Video = () => {
    const { videoId } = useParams();
    const { videoDetail, setVideoDetail } = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
        console.log(videoId)
    }, [videoId]);

    return (
        <Main 
            title = "유튜브 비디오 영상"
            description="유튜브 비디오 영상을 볼 수 있습니다."
        >
            Video
        </Main>
    )
}

export default Video