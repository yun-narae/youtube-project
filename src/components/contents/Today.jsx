import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/theme';
import Icon from '../Icon/Icon';

const Today = ({ videos, title, id}) => {
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();

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
        innerStyle: {
            backgroundColor: backgroundColor,
            borderColor: borderColor,
        },
        textStyle: {
            color: textColor
        },
        textinfoStyle: {
            color: textinfoColor
        },
        labelStyle: {
            backgroundColor: labelbackgroundColor,
            color: labeltextColor,
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, []);

    return (
        <section id={id}>
            {loading ? (
                <div style={styles.skeletonLoader} className="skeleton-loader skeleton-loader__today">
                        <div style={styles.skeletonCard} className="skeleton-thumb"></div>
                        <div className="skeleton-card">
                            <span style={styles.skeletonCard} className="skeleton-label"></span>
                            <div style={styles.skeletonCard} className="skeleton-title"></div>
                            <div style={styles.skeletonCard} className="skeleton-info"></div>
                            <div style={styles.skeletonCard} className="skeleton-info"></div>
                        </div>
                    </div>
            ) : (
                <>
                    <h2>{title}</h2>
                    <div className='today__inner' style={styles.innerStyle}>
                        <div className='today__thumb play__icon-frame'>
                            <Link to={videos[0].page}>
                                <img src={videos[0].img} alt={videos[0].title} />
                                <Icon
                                    name="play"
                                    size={40}
                                    className="play__icon"
                                />
                            </Link>
                        </div>
                        <div className='today__card'>
                            <span className='label' style={styles.labelStyle}>today</span>
                            <Link to={videos[0].page} style={styles.textStyle}>
                                <h3 className='title'>{videos[0].title}</h3>
                                <p className='desc'>{videos[0].desc}</p>
                            </Link>
                            <div className='info' style={styles.textinfoStyle}>
                                <Link to={`/channel/${videos[0].channelId}`}>
                                    <span className='author'>{videos[0].author}</span>
                                </Link>
                                <span className='date'>{videos[0].date}</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    )
}

export default Today