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

    const {
        NavActive: { navbackground, keywordactiveborder },
    } = theme;

    const menuStyles = {
        borderColor: border,
    };

    const menuActiveStyles = {
        backgroundColor: navbackground,
    };

    const keywordStyles = {
        borderColor: keywordborder,
    };

    const keywordActiveStyles = {
        borderColor: keywordactiveborder,
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