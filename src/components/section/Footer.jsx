import React from 'react'
import { useTheme } from '../../contexts/theme';

const Footer = () => {
    const { theme } = useTheme();

    const {
        Footer: { backgroundColor, textColor},
    } = theme;

    const footerStyle = {
        backgroundColor: backgroundColor,
        color: textColor
    }

    return (
        <footer id='footer' role="contentinfo" style={footerStyle}> 
            <a href="mailto:webstoryboy@naver.com" rel="noopener noreferrer">
                skfo0827@naver.com
            </a>
        </footer>
    )
}

export default Footer