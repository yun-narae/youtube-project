import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { Link, useParams } from 'react-router-dom';
import { CiBadgeDollar, CiMedal, CiRead } from 'react-icons/ci';

const Channel = () => {
    const { channelId } = useParams();
    const [ channelDetail, setChannelDetail ] = useState()
    
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)

        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setChannelDetail(data.items[0])
        })
        console.log(channelId)
    }, [channelId]);

    return (
        <Main 
            title = "유튜브 채널"
            description="유튜브 채널페이지입니다."
        >
            {channelDetail && (
                <section id='channel'>
                    <div className='channel__header'>
                        <div className='circle'>
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                        </div>
                    </div>
                    <div className='channel__info'>
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <p className='desc'>{channelDetail.snippet.description}</p>
                        <div className='info'>
                            <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                            <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                            <span><CiRead />{channelDetail.statistics.viewCount}</span>
                        </div>
                    </div>
                </section>
            )}
        </Main>
    )
}

export default Channel