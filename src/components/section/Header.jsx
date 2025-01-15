import { useState } from 'react'
import { useTheme } from '../../contexts/theme';
import Logo from '../header/Logo';
import Menu from '../header/Menu';

const Header = ({ isMenuActive, setIsMenuActive, toggleMenu }) => {
    const { theme } = useTheme();

    const {
        Header: { backgroundColor, textColor },
    } = theme;

    const boxStyles = {
        backgroundColor: backgroundColor,
        color: textColor
    };

    return (
        <header id='header' role='banner' style={boxStyles} className={isMenuActive ? 'active' : ''}>
            <Logo toggleMenu={toggleMenu} isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive}/>
            <Menu />
        </header>
    )
}

export default Header;
  