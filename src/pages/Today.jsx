import React from 'react'
import Main from '../components/section/Main'
import { todayText } from '../data/Today'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/theme'

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
        <Main 
            title = "추천 영상"
            description="오늘의 추천 유튜브 영상입니다."
        >
            <section id='todayPage'>
                <h2 style={textStyle}>오늘의 추천영상</h2>
                {todayText.map((today, key) => (
                    <div className='today__inner' key={key} style={innerStyle}>
                        <div className='today__thumb play__icon'>
                            <Link to={today.page}>
                                <img src={today.img} alt={today.title} />
                            </Link>
                        </div>
                        <div className='today__text'>
                            <span className='label' style={labelStyle}>today</span>
                            <Link to={today.page} style={textStyle}>
                                <h3 className='title'>{today.title}</h3>
                                <p className='desc'>{today.desc}</p>
                            </Link>
                            <div className='info' style={textinfoStyle}>
                                <Link to={`/channel/${today.channelId}`}>
                                    <span className='author'>{today.author}</span>
                                </Link>
                                <span className='date'>{today.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Main>
    )
}

export default Today