import React, { useState } from 'react'
import { useTheme } from '../../contexts/theme';
import { Link } from 'react-router-dom';
import NavToggle from '../Button/NavToggle';

const Logo = ({ isMenuActive, toggleMenu }) => {
    const { theme } = useTheme();

    const {
        textColor,
        Header: { borderColor, logoColor, navBtnbackColor, navBtnbackColorHover },
    } = theme;

    const styles = {
        navMenuStyles: {
            backgroundColor: navBtnbackColor,
        },

        navMenuHoverStyles: {
            backgroundColor: navBtnbackColorHover,
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
    };

    return (
        <>
            <h1 className='header__logo' style={styles.borderStyles}>
                <Link to='/'>
                    <em aria-hidden='true' style={styles.logoStyles}></em>
                    <span>webs<br />youtube</span>
                </Link>
                {/* <div
                    className="btn-box"
                    id="headerToggle"
                    role="button"
                    tabIndex="0"
                    aria-controls="primary-menu"
                    onClick={toggleMenu}
                    onMouseEnter={() => setIsHovered(true)} // hover 시작
                    onMouseLeave={() => setIsHovered(false)} // hover 종료
                    onFocus={() => setIsFocused(true)} // focus 시작
                    onBlur={() => setIsFocused(false)} // focus 종료
                    style={{
                        ...styles.navMenuStyles, 
                        ...(isHovered ? styles.navMenuHoverStyles : {}),
                        ...(isFocused ? styles.navMenuHoverStyles : {}), // focus 스타일 적용
                    }}
                >
                    <span style={styles.textStyles}>{isMenuActive ? "햄" : "버거"}</span>
                </div> */}
                <NavToggle 
                    isMenuActive={isMenuActive}
                    toggleMenu={toggleMenu}
                    navBtnbackColor={navBtnbackColor}
                    navBtnbackColorHover={navBtnbackColorHover}
                    textColor={textColor}
                />
            </h1>
        </>
    );
};

export default Logo;
