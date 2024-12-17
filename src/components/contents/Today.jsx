import React from 'react'
import { Link } from 'react-router-dom'
import { todayText } from '../../data/Today'
import { useTheme } from '../../contexts/theme';

const Today = () => {
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

  return (
    <section id='today'>
        <div className='today__inner' style={innerStyle}>
            <div className='today__thumb play__icon'>
                <Link to={todayText[0].page}>
                    <img src={todayText[0].img} alt={todayText[0].title} />
                </Link>
            </div>
            <div className='today__text'>
                <span className='label' style={labelStyle}>today</span>
                <Link to={todayText[0].page} style={textStyle}>
                    <h3 className='title'>{todayText[0].title}</h3>
                    <p className='desc'>{todayText[0].desc}</p>
                </Link>
                <div className='info' style={textinfoStyle}>
                    <Link to={`/channel/${todayText[0].channelId}`}>
                        <span className='author'>{todayText[0].author}</span>
                    </Link>
                    <span className='date'>{todayText[0].date}</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Today