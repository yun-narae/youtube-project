import React, { useState } from 'react'
import { useTheme } from '../../contexts/theme';
import { Link } from 'react-router-dom';

const Logo = ({ isMenuActive, toggleMenu }) => {
    const { theme } = useTheme();
    const [isHovered, setIsHovered] = useState(false); // hover 상태 관리

    const {
        textColor,
        Header: { borderColor, logoColor, navBtnbackColor, navBtnbackColorHover },
    } = theme;

    const styles = {
        navMenuStyles: {
            backgroundColor: navBtnbackColor,
        },

        textStyles: {
            color: textColor
        },

        borderStyles: {
            borderColor: borderColor,
        },
        
        logoStyles: {
            backgroundColor: logoColor,
        }
    }

    return (
        <>
            <h1 className='header__logo' style={styles.borderStyles}>
                <Link to='/'>
                    <em aria-hidden='true' style={styles.logoStyles}></em>
                    <span>webs<br />youtube</span>
                </Link>
                    <div
                        className="btn-box"
                        id="headerToggle"
                        role="button"
                        tabIndex="0"
                        aria-controls="primary-menu"
                        onClick={toggleMenu}
                        onMouseEnter={() => setIsHovered(true)} // hover 시작
                        onMouseLeave={() => setIsHovered(false)} // hover 종료
                        style={{
                            ...styles.navMenuStyles, 
                            backgroundColor: isHovered ? navBtnbackColorHover : navBtnbackColor // 조건부로 배경색 변경
                        }}
                    >
                        <span style={styles.textStyles}>{isMenuActive ? "햄" : "버거"}</span>
                    </div>
            </h1>
        </>
    )
}

export default Logo;
