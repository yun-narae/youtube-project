import React from 'react'
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
                    <span>Developer<br />youtube</span>
                </Link>
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
