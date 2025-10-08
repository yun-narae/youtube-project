import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon';

const VideoSearch = ({ videos, loading, theme }) => {
    const {
        Skeleton: { SkeletonbackgroundColor, SkeletoncardbackgroundColor}
    } = theme;

    const styles = {
        skeletonLoader: {
          backgroundColor: SkeletonbackgroundColor,
        },
        skeletonCard: {
          backgroundColor: SkeletoncardbackgroundColor,
        }
    }

    return (
        <>
            {loading ? (
                [...new Array(4)].map((_, key) => (  // 2개의 스켈레톤 UI 반복 생성
                <div key={key} className="skeleton-loader skeleton-loader__video" style={styles.skeletonLoader}>
                    <div className="skeleton-thumb skeleton-thumb__search" style={styles.skeletonCard}></div>
                    <div className="skeleton-card">
                        <div className="skeleton-info" style={styles.skeletonCard}></div>
                        <div className="skeleton-info" style={styles.skeletonCard}></div>
                    </div>
                </div>
                ))
            ) : (
                videos.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb  play__icon-frame">
                            <Link 
                                to={`/video/${video.id.videoId}`} 
                                style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}>
                                    <Icon
                                        name="play"
                                        size={40}
                                        className="play__icon"
                                    />
                            </Link>
                        </div>
                        <div className="video__info">
                            <div className="title">
                                <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                            </div>
                            <div className="info">
                                <span className="author">
                                    <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    )
}

export default VideoSearch;
