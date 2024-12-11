import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { headerMenus, searchKeyword } from '../../data/header';
import { useTheme } from '../../contexts/theme';


const Menu = () => {
    const location = useLocation();

    const { theme } = useTheme();

    const {
        Header: { border, keywordborder },
    } = theme;

    const menuStyles = {
        borderColor: border,
    };

    const keywordStyles = {
        borderColor: keywordborder,
    };

    return (
        <nav className='header__menu'>
            <ul className='menu' style={menuStyles}>
                {headerMenus.map((menu, key) => (
                    <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src} >
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword' >
                {searchKeyword.map((keyword, key) => (
                    <li key={key} className={location.pathname === keyword.src ? 'active' : ''}>
                        <Link to={keyword.src} style={keywordStyles}>
                            {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu