import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { headerMenus, searchKeyword } from '../../data/header';
import { useTheme } from '../../contexts/theme';
import Sns from './Sns';
import AppSwitch from '../AppSwitch';


const Menu = () => {
    const { isDarkMode, toggleMode } = useTheme();
    // 각 항목에 대한 hover 상태 배열 관리
    const [menuHovered, setMenuHovered] = useState(new Array(headerMenus.length).fill(false)); // 메뉴 항목별 hover 상태
    const [keywordHovered, setKeywordHovered] = useState(new Array(searchKeyword.length).fill(false)); // 키워드 항목별 hover 상태


    const location = useLocation();

    const { theme } = useTheme();

    const handleToggle = useCallback(() => {
        toggleMode();
      }, [toggleMode]);

    const {
        Header: { borderColor},
        Navigation: { keywordBorderColor, activenavbackgroundColor, hovernavbackgroundColor, activeKeywordBorderColor, hoverkeywordBorderColor }
    } = theme;
    
    const styles = {
        menuStyles: {
            borderColor: borderColor,
        },
        menuActiveStyles: {
            backgroundColor: activenavbackgroundColor,
        },
        menuHoverStyles: {
            backgroundColor: hovernavbackgroundColor,
        },
        keywordStyles: {
            borderColor: keywordBorderColor,
        },
        keywordActiveStyles: {
            borderColor: activeKeywordBorderColor,
        },
        keywordHoverStyles: {
            borderColor: hoverkeywordBorderColor,
        },
        containerStyles: {
            borderColor: borderColor,
        }
    }

    return (
        <nav className='header__menu'>
            <ul className='menu' style={styles.menuStyles}>
                {headerMenus.map((menu, key) => (
                    <li key={key}>
                        <Link 
                            to={menu.src} 
                            onMouseEnter={() => setMenuHovered(true)} 
                            onMouseLeave={() => setMenuHovered(false)}
                            style={{
                                ...(
                                    location.pathname === menu.src 
                                        ? styles.menuActiveStyles
                                        : styles.menuStyles
                                ),
                                ...(menuHovered ? styles.menuHoverStyles : {}), // hover 스타일 적용
                            }}
                        >
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword' >
                {searchKeyword.map((keyword, key) => (
                    <li key={key}>
                        <Link 
                            to={keyword.src}
                            onMouseEnter={() => setKeywordHovered(true)} 
                            onMouseLeave={() => setKeywordHovered(false)}
                            style={{
                                ...(
                                    location.pathname === keyword.src 
                                        ? styles.keywordActiveStyles 
                                        : styles.keywordStyles
                                ),
                                ...(keywordHovered ? styles.keywordHoverStyles : {}), // hover 스타일 적용
                            }}
                        >
                            {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div style={styles.containerStyles} className='switch'>
                <AppSwitch value={isDarkMode} onToggle={handleToggle} ratio={2} />
                {isDarkMode ? '다크' : '라이트'} 모드
            </div>
            <Sns />
        </nav>
    )
}

export default Menu;