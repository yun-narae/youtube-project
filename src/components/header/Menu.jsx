import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { headerMenus, searchKeyword } from '../../data/header';
import { useTheme } from '../../contexts/theme';


const Menu = () => {
    const location = useLocation();

    const { theme } = useTheme();

    const {
        Header: { borderColor },
    } = theme;

    const {
        Navigation: { keywordBorderColor, activenavbackgroundColor, activeKeywordBorderColor },
    } = theme;

    const menuStyles = {
        borderColor: borderColor,
    };

    const menuActiveStyles = {
        backgroundColor: activenavbackgroundColor,
    };

    const keywordStyles = {
        borderColor: keywordBorderColor,
    };

    const keywordActiveStyles = {
        borderColor: activeKeywordBorderColor,
    };

    return (
        <nav className='header__menu'>
            <ul className='menu' style={menuStyles}>
                {headerMenus.map((menu, key) => (
                    <li key={key}>
                        <Link to={menu.src} style={location.pathname === menu.src ? menuActiveStyles : {}}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword' >
                {searchKeyword.map((keyword, key) => (
                    <li key={key}>
                        <Link to={keyword.src} style={location.pathname === keyword.src ? keywordActiveStyles : keywordStyles}>
                            {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu