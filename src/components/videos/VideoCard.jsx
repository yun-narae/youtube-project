import React from 'react';
import VideoMoreList from './VideoMoreList';  // 더보기 기능을 처리하는 VideoMoreList 컴포넌트 임포트
import { useTheme } from '../../contexts/theme';

const VideoCard = ({ videos = [], loading, title, id, className, breakpoint = 360, mobileCount = 10, desktopCount = 20 }) => {
    const { theme } = useTheme();

    const textColor = theme.textColor;

    const {
        Skeleton: { SkeletonbackgroundColor, SkeletoncardbackgroundColor}
    } = theme;

    const styles = {
        skeletonLoader: {
          backgroundColor: SkeletonbackgroundColor,
        },
        skeletonCard: {
          backgroundColor: SkeletoncardbackgroundColor,
        },
    }

    return (
        <section id={id} className={className}>
            <h2 style={{ color: textColor }}>{title}</h2>
            {/* 로딩 중일 때 스켈레톤 UI 표시 */}
            {loading ? (
                <div className="video__inner">
                    {[...new Array(4)].map((_, key) => (  // 4개의 스켈레톤 UI 반복 생성
                    <div key={key} className="skeleton-loader skeleton-loader__video" style={styles.skeletonLoader}>
                        <div className="skeleton-thumb" style={styles.skeletonCard}></div>
                    </div>
                    ))}
                </div>
            ) : (
                // 데이터 로딩 완료 후 VideoMoreList 컴포넌트 렌더링
                <VideoMoreList
                    theme={theme}
                    items={videos}  // 비디오 목록
                    breakpoint={breakpoint}  // 화면 크기에 따른 분기점 설정
                    mobileCount={mobileCount}  // 모바일에서 보여줄 비디오 개수
                    desktopCount={desktopCount}  // 데스크탑에서 보여줄 비디오 개수
                />
            )}
        </section>
    );
};

export default VideoCard;
