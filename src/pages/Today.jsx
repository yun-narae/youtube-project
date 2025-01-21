import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { todayText } from '../data/Today'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/theme'

const Today = () => {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);
    
    const {
        Today: { backgroundColor, borderColor, textColor, textinfoColor, labelbackgroundColor, labeltextColor},
        Skeleton: { SkeletonbackgroundColor, SkeletoncardbackgroundColor}
    } = theme;

    const styles = {
        skeletonLoader: {
          backgroundColor: SkeletonbackgroundColor,
        },
        skeletonCard: {
          backgroundColor: SkeletoncardbackgroundColor,
        },
        inner: {
          backgroundColor,
          borderColor,
        },
        text: {
          color: textColor,
        },
        textInfo: {
          color: textinfoColor,
        },
        label: {
          backgroundColor: labelbackgroundColor,
          color: labeltextColor,
        },
    };
      

    return (
        <Main 
            title = "추천 영상"
            description="오늘의 추천 유튜브 영상입니다."
        >
            <section id='todayPage'>
                <h2 style={styles.text}>오늘의 추천영상</h2>
                {loading ? (
                    [...new Array(4)].map((_, idx) => (  // 2개의 스켈레톤 UI 반복 생성
                    <div style={styles.skeletonLoader} className="skeleton-loader skeleton-loader__today">
                        <div style={styles.skeletonCard} className="skeleton-thumb"></div>
                        <div className="skeleton-card">
                            <span style={styles.skeletonCard} className="skeleton-label"></span>
                            <div style={styles.skeletonCard} className="skeleton-title"></div>
                            <div style={styles.skeletonCard} className="skeleton-info"></div>
                            <div style={styles.skeletonCard} className="skeleton-info"></div>
                        </div>
                    </div>
                    ))
                ) : (
                    todayText.map((today, key) => (
                        <div className='today__inner' key={key} style={styles.inner}>
                            <div className='today__thumb play__icon'>
                                <Link to={today.page}>
                                    <img src={today.img} alt={today.title} />
                                </Link>
                            </div>
                            <div className='today__card'>
                                <span className='label' style={styles.label}>today</span>
                                <Link to={today.page} style={styles.text}>
                                    <h3 className='title'>{today.title}</h3>
                                    <p className='desc'>{today.desc}</p>
                                </Link>
                                <div className='info' style={styles.textInfo}>
                                    <Link to={`/channel/${today.channelId}`}>
                                        <span className='author'>{today.author}</span>
                                    </Link>
                                    <span className='date'>{today.date}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </section>
        </Main>
    )
}

export default Today