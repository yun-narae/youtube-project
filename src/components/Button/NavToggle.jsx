import React, { useState } from 'react';

const NavToggle = ({ isMenuActive, toggleMenu, navBtnbackColor, navBtnbackColorHover, textColor }) => {
    const [isHovered, setIsHovered] = useState(false); // hover 상태 관리
    const [isFocused, setIsFocused] = useState(false); // focus 상태 관리

    return (
        <button
            className="btn-box"
            id="headerToggle"
            tabIndex="0"
            aria-controls="primary-menu"
            onClick={toggleMenu}
            onMouseEnter={() => setIsHovered(true)} // hover 시작
            onMouseLeave={() => setIsHovered(false)} // hover 종료
            onFocus={() => setIsFocused(true)} // focus 시작
            onBlur={() => setIsFocused(false)} // focus 종료
            style={{
                backgroundColor: isHovered || isFocused ? navBtnbackColorHover : navBtnbackColor, // hover or focus 스타일
                color: textColor,
            }}
        >
            <span>{isMenuActive ? "햄" : "버거"}</span>
        </button>
    );
};

export default NavToggle;
