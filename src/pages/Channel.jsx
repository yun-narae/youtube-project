import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { useParams } from 'react-router-dom';
import { CiBadgeDollar, CiMedal, CiRead } from 'react-icons/ci';
import VideoSearch from '../components/videos/VideoSearch';
import LoadMoreButton from '../components/Button/LoadMoreButton';
import { useTheme } from '../contexts/theme';

const Channel = () => {
    const [loading, setLoading] = useState(true);
    const { channelId } = useParams();
    const { theme } = useTheme();
    const [channelDetail, setChannelDetail] = useState(null);
    const [channelVideo, setChannelVideo] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loadingMore, setLoadingMore] = useState(false);

    const {
        textColor,
        Skeleton: { SkeletonbackgroundColor, SkeletoncardbackgroundColor},
        Channel: { headerbackgroundColor, circleborderColor, desctextColor, infobackColor, infotextColor}
    } = theme;

    const styles = {
        textStyle: {
            color: textColor,
        },
        skeletonLoader: {
          backgroundColor: SkeletonbackgroundColor,
        },
        skeletonCard: {
          backgroundColor: SkeletoncardbackgroundColor,
        },
        headerStyle: {
            backgroundColor: headerbackgroundColor,
        },
        thumStyle: {
            borderColor: circleborderColor,
        },
        descStyle: {
            color: desctextColor,
        },
        infoStyle: {
            backgroundColor: infobackColor,
            color: infotextColor,
        }
    }

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
                    `https://youtube.googleapis.com/youtube/v3/search?channelId=${channelId}&part=snippet,id&type=video&order=date&maxResults=20&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                );
                const videoData = await videoResponse.json();
                setChannelVideo(videoData?.items || []);
                setNextPageToken(videoData?.nextPageToken || null);
            } catch (error) {
                console.error('데이터 가져오기 오류:', error);
            } finally {
                setLoading(false);
            }
        };

        if (channelId) {
            fetchChannelData();
        }
    }, [channelId]);

    const fetchVideos = async (pageToken) => {
        try {
            setLoadingMore(true);
            const videoResponse = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?channelId=${channelId}&part=snippet,id&type=video&order=date&maxResults=20&pageToken=${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
            );
            const videoData = await videoResponse.json();
            setChannelVideo((prevVideos) => [...prevVideos, ...videoData?.items]);
            setNextPageToken(videoData?.nextPageToken || null);
        } catch (error) {
            console.error('추가 데이터 가져오기 오류:', error);
        } finally {
            setLoadingMore(false);
        }
    };

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(nextPageToken);
        }
    };

    return (
        <Main title="유튜브 채널" description="유튜브 채널 페이지입니다.">
            <section id="channel">
            {loading ? (
                    <>
                        <div className="skeleton-header" style={styles.skeletonLoader}>
                            <div className="skeleton-thumb" style={styles.skeletonCard}></div>
                        </div>
                        <div className="skeleton-inner__channel">
                            <div className="skeleton-title" style={styles.skeletonCard}></div>
                            <div className="skeleton-video">
                                {[...new Array(4)].map((_, idx) => (  // 2개의 스켈레톤 UI 반복 생성
                                <div key={idx} className="skeleton-loader skeleton-loader__video" style={styles.skeletonLoader}>
                                    <div className="skeleton-thumb skeleton-thumb__search" style={styles.skeletonCard}></div>
                                    <div className="skeleton-card">
                                        <div className="skeleton-info" style={styles.skeletonCard}></div>
                                        <div className="skeleton-info" style={styles.skeletonCard}></div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : channelDetail ? (
                    <>
                        <div className="channel__header" style={styles.headerStyle}>
                            <div className="circle" style={styles.thumStyle}>
                                <img
                                    src={channelDetail.snippet.thumbnails.high.url}
                                    alt={channelDetail.snippet.title}
                                />
                            </div>
                        </div>
                        <div className="channel__inner">
                            <div className="channel__info">
                                <h3 className="title" style={styles.textStyle}>{channelDetail.snippet.title}</h3>
                                <p className="desc" style={styles.descStyle}>{channelDetail.snippet.description}</p>
                                <div className="info">
                                    <span style={styles.infoStyle}>
                                        <CiBadgeDollar />
                                        {channelDetail.statistics.subscriberCount}
                                    </span>
                                    <span style={styles.infoStyle}>
                                        <CiMedal />
                                        {channelDetail.statistics.videoCount}
                                    </span>
                                    <span style={styles.infoStyle}>
                                        <CiRead />
                                        {channelDetail.statistics.viewCount}
                                    </span>
                                </div>
                            </div>
                            <div className="channel__video video__inner search">
                                <VideoSearch
                                    theme={theme}
                                    videos={channelVideo}
                                />
                            </div>
                            {nextPageToken && (
                                <div className="video__more">
                                    <LoadMoreButton
                                        theme={theme}
                                        onClick={handleLoadMore}
                                        loading={loadingMore}
                                    />
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <p>채널 정보를 가져오는 데 실패했습니다.</p>
                )}
            </section>
        </Main>
    );
};

export default Channel;
