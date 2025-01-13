import { useCallback, useState } from 'react'
import { useTheme } from '../../contexts/theme';
import Logo from '../header/Logo';
import Menu from '../header/Menu';

const Header = () => {
    const { theme } = useTheme();
    const [ isMenuActive, setIsMenuActive ] = useState(false);



    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }

    const {
        Header: { backgroundColor, textColor, borderColor },
    } = theme;

    const boxStyles = {
        backgroundColor: backgroundColor,
        color: textColor
    };



    return (
        <header id='header' role='banner' style={boxStyles} className={isMenuActive ? 'active' : ''}>
            <Logo toggleMenu={toggleMenu}/>
            <Menu />
        </header>
    )
}

export default Header;
  