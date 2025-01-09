import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom';
import { CiBadgeDollar, CiMedal, CiRead } from 'react-icons/ci';
import VideoSearch from '../components/videos/VideoSearch';

const Channel = () => {
    const [loading, setLoading] = useState(true);
    const { channelId } = useParams();
    const [ channelDetail, setChannelDetail ] = useState();
    const [ channelVideo, setChannelVideo ] = useState([]);
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);

    useEffect(() => {
        const fetchChannelData = async () => {
            try {
                // 채널 세부정보 가져오기
                const channelResponse = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                );
                const channelData = await channelResponse.json();
                setChannelDetail(channelData?.items[0]);
                
                // 채널의 비디오 목록 가져오기
                const videoResponse = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/search?channelId=${channelId}&part=snippet,id&orderdate&maxResults=20&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                );
                const videoData = await videoResponse.json();
                setChannelVideo(videoData?.items);

                console.log('채널 데이터:', channelData);
                console.log('비디오 데이터:', videoData);
            } catch (error) {
                console.error('데이터 가져오기 오류:', error);
            } finally {
                setLoading(false); // 데이터를 가져온 후 로딩 상태 해제
            }
        };

        if (channelId) {
            fetchChannelData();
        }
    }, [channelId]); // channelId가 변경될 때마다 실행

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "유튜브 채널"
            description="유튜브 채널페이지입니다."
        >
            <section id='channel' className={channelPageClass}>
                {channelDetail && (
                    <div className='channel__inner'>
                        <div className='channel__header'>
                            {/* 채널 배너는 OAuth 2.0 인증이 필요 */}
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
                        <div className='channel__video video__inner search'>
                            <VideoSearch videos={channelVideo} />
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Channel