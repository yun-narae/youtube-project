import { useCallback } from 'react'
import AppSwitch from '../AppSwitch/index';
import { useTheme } from '../../contexts/theme';
import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';

const Header = () => {
    const { isDarkMode, toggleMode } = useTheme();
    const { theme } = useTheme();

    const handleToggle = useCallback(() => {
      toggleMode();
    }, [toggleMode]);

    const {
        Header: { backgroundColor, textColor, borderColor },
    } = theme;

    const boxStyles = {
        backgroundColor: backgroundColor,
        color: textColor
    };

    const containerStyles = {
        borderColor: borderColor,
    };

    return (
        <header id='header' role='banner' style={boxStyles}>
            <Logo />
            <Menu />
            <Sns />
            <div style={containerStyles} className='switch'>
                <AppSwitch value={isDarkMode} onToggle={handleToggle} ratio={2} />
                {isDarkMode ? '다크' : '라이트'} 모드
            </div>
        </header>
    )
}

export default Header;
  