import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/theme';

const Today = ({ videos, id}) => {
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();

    const {
        Today: { backgroundColor, borderColor, textColor, textinfoColor, labelbackgroundColor, labeltextColor},
    } = theme;

    const innerStyle = {
        backgroundColor: backgroundColor,
        borderColor: borderColor,
    };

    const textStyle = {
        color: textColor
    };

    const textinfoStyle = {
        color: textinfoColor
    };

    const labelStyle = {
        backgroundColor: labelbackgroundColor,
        color: labeltextColor,
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 300);
    }, []);

    return (
        <section id={id}>
            {loading ? (
                <div className="skeleton-loader skeleton-loader__today">
                    <div className="skeleton-thumb"></div>
                    <div className="skeleton-card">
                        <span className="skeleton-label"></span>
                        <div className="skeleton-title"></div>
                        <div className="skeleton-info"></div>
                        <div className="skeleton-info"></div>
                    </div>
                </div>
            ) : (
                <div className='today__inner' style={innerStyle}>
                    <div className='today__thumb play__icon'>
                        <Link to={videos[0].page}>
                            <img src={videos[0].img} alt={videos[0].title} />
                        </Link>
                    </div>
                    <div className='today__card'>
                        <span className='label' style={labelStyle}>today</span>
                        <Link to={videos[0].page} style={textStyle}>
                            <h3 className='title'>{videos[0].title}</h3>
                            <p className='desc'>{videos[0].desc}</p>
                        </Link>
                        <div className='info' style={textinfoStyle}>
                            <Link to={`/channel/${videos[0].channelId}`}>
                                <span className='author'>{videos[0].author}</span>
                            </Link>
                            <span className='date'>{videos[0].date}</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Today