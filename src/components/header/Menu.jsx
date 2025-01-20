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
    const [menuFocused, setMenuFocused] = useState(new Array(headerMenus.length).fill(false)); // 메뉴 항목별 focus 상태
    const [keywordFocused, setKeywordFocused] = useState(new Array(searchKeyword.length).fill(false)); // 키워드 항목별 focus 상태

    const location = useLocation();
    const { theme } = useTheme();

    const handleToggle = useCallback(() => {
        toggleMode();
    }, [toggleMode]);

    const {
        Header: { borderColor },
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
        menuFocusStyles: {
            backgroundColor: hovernavbackgroundColor, // focus 상태일 때 스타일
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
        keywordFocusStyles: {
            borderColor: hoverkeywordBorderColor, // focus 상태일 때 스타일
        },
        containerStyles: {
            borderColor: borderColor,
        }
    };

    // hover 상태 변경 함수
    const handleMenuHover = (index, isHovered) => {
        setMenuHovered(prevState => {
            const updatedHoveredState = [...prevState];
            updatedHoveredState[index] = isHovered;
            return updatedHoveredState;
        });
    };

    const handleKeywordHover = (index, isHovered) => {
        setKeywordHovered(prevState => {
            const updatedHoveredState = [...prevState];
            updatedHoveredState[index] = isHovered;
            return updatedHoveredState;
        });
    };

    // focus 상태 변경 함수
    const handleMenuFocus = (index, isFocused) => {
        setMenuFocused(prevState => {
            const updatedFocusedState = [...prevState];
            updatedFocusedState[index] = isFocused;
            return updatedFocusedState;
        });
    };

    const handleKeywordFocus = (index, isFocused) => {
        setKeywordFocused(prevState => {
            const updatedFocusedState = [...prevState];
            updatedFocusedState[index] = isFocused;
            return updatedFocusedState;
        });
    };

    return (
        <nav className='header__menu'>
            <ul className='menu' style={styles.menuStyles}>
                {headerMenus.map((menu, index) => (
                    <li key={index}>
                        <Link
                            to={menu.src}
                            onMouseEnter={() => handleMenuHover(index, true)} // hover 시작
                            onMouseLeave={() => handleMenuHover(index, false)} // hover 종료
                            onFocus={() => handleMenuFocus(index, true)} // focus 시작
                            onBlur={() => handleMenuFocus(index, false)} // focus 종료
                            style={{
                                ...(location.pathname === menu.src ? styles.menuActiveStyles : styles.menuStyles),
                                ...(menuHovered[index] ? styles.menuHoverStyles : {}), // hovers 스타일 적용
                                ...(menuFocused[index] ? styles.menuFocusStyles : {}), // focus 스타일 적용
                            }}
                        >
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                {searchKeyword.map((keyword, index) => (
                    <li key={index}>
                        <Link
                            to={keyword.src}
                            onMouseEnter={() => handleKeywordHover(index, true)}  // hover 시작
                            onMouseLeave={() => handleKeywordHover(index, false)} // hover 종료
                            onFocus={() => handleKeywordFocus(index, true)} // focus 시작
                            onBlur={() => handleKeywordFocus(index, false)}  // focus 종료
                            style={{
                                ...(location.pathname === keyword.src ? styles.keywordActiveStyles : styles.keywordStyles),
                                ...(keywordHovered[index] ? styles.keywordHoverStyles : {}), // hovers 스타일 적용
                                ...(keywordFocused[index] ? styles.keywordFocusStyles : {}), // focus 스타일 적용
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
    );
};

export default Menu;
