import React, { useState } from "react";
import Icon from "../Icon/Icon"; // 경로는 프로젝트 구조에 맞게 조정

const NavToggle = ({ isMenuActive, toggleMenu, navBtnbackColor, navBtnbackColorHover, textColor }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const bg = isHovered || isFocused ? navBtnbackColorHover : navBtnbackColor;
    const iconName = isMenuActive ? "delete" : "menu";
    const ariaLabel = isMenuActive ? "메뉴 닫기" : "메뉴 열기";

    return (
        <button
            className="btn-box inline-flex items-center justify-center"
            id="headerToggle"
            type="button"
            tabIndex={0}
            aria-controls="primary-menu"
            aria-expanded={isMenuActive}
            aria-label={ariaLabel}
            onClick={toggleMenu}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{ backgroundColor: bg, color: textColor }}
        >
            <Icon
                name={iconName}
                size={24}
                decorative={true} // 스크린리더 텍스트는 아래 sr-only로 전달
                className=""
            />
        </button>
    );
};

export default NavToggle;
