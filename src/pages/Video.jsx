import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { CiChat1, CiStar, CiRead } from 'react-icons/ci';
import { useTheme } from '../contexts/theme';

const Video = () => {
    const { theme } = useTheme();
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const {
        textColor,
        Skeleton: { SkeletonbackgroundColor, SkeletoncardbackgroundColor},
        Video: { VideoDetailbackgroundColor }
    } = theme;

    const styles = {
        skeletonLoader: {
          backgroundColor: SkeletonbackgroundColor,
        },
        skeletonCard: {
          backgroundColor: SkeletoncardbackgroundColor,
        },
        VideoDetail: {
            backgroundColor: VideoDetailbackgroundColor
        }
    }

    useEffect(() => {
        const fetchVideoDetail = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                );
                const data = await response.json();
                setVideoDetail(data.items[0]);
            } catch (error) {
                console.error('Error fetching video details:', error);
            } finally {
                setLoading(false); // 로딩 상태 해제
            }
        };

        if (videoId) {
            fetchVideoDetail();
        }
    }, [videoId]);

    return (
        <Main
            title="유튜브 비디오 영상"
            description="유튜브 비디오 영상을 볼 수 있습니다."
        >
            <section id="videoViewPage" style={{ color: textColor }}>
                <div className="video__view">
                    {loading ? (
                        <div className="skeleton-loader__videoView">
                            <div className="skeleton-thumb skeleton-thumb__videoView" style={styles.skeletonLoader}></div>
                            <div className="skeleton-card__videoView">
                                <div className="skeleton-title" style={styles.skeletonCard}></div>
                                <div className="skeleton-info" style={styles.skeletonCard}></div>
                            </div>
                        </div>
                    ) : (
                        videoDetail && (
                            <>
                                <div className="video__play">
                                    <ReactPlayer
                                        playing={true}
                                        url={`https://www.youtube.com/watch?v=${videoId}`}
                                        width="100%"
                                        height="100%"
                                        style={{ position: 'absolute', top: 0, left: 0 }}
                                    />
                                </div>
                                <div className="video__info">
                                    <h2 className="video__title">{videoDetail.snippet.title}</h2>
                                    <div className="video__channel" style={styles.VideoDetail}>
                                        <div className="id">
                                            <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                                                {videoDetail.snippet.channelTitle}
                                            </Link>
                                        </div>
                                        <div className="count">
                                            <span className="view">
                                                <CiRead />
                                                {videoDetail.statistics.viewCount}
                                            </span>
                                            <span className="like">
                                                <CiStar />
                                                {videoDetail.statistics.likeCount}
                                            </span>
                                            <span className="comment">
                                                <CiChat1 />
                                                {videoDetail.statistics.commentCount}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="video__desc">
                                        {videoDetail.snippet.description}
                                    </div>
                                </div>
                            </>
                        )
                    )}
                </div>
            </section>
        </Main>
    );
};

export default Video;
