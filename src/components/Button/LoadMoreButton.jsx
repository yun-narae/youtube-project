import React, { useState } from 'react';

const LoadMoreButton = ({ onClick, loading, theme }) => {
    const [isHovered, setIsHovered] = useState(false); // hover 상태 관리
    const [isFocused, setIsFocused] = useState(false); // focus 상태 관리

    const {
        textColor,
        Button: { buttonback, hoverbuttonback }, // focus 시 배경 색 추가
    } = theme;

    const styles = {
        buttonStyle: {
            backgroundColor: buttonback,
            color: textColor,
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            outline: 'none', // 기본 outline을 없애기 위해 추가
        },
        buttonHoverStyle: {
            backgroundColor: hoverbuttonback,
        },
        buttonFocusStyle: {
            backgroundColor: hoverbuttonback, // focus 상태일 때의 배경 색
        }
    };

    return (
        <button
            onClick={onClick}
            disabled={loading}
            style={{
                ...styles.buttonStyle,
                ...(isHovered ? styles.buttonHoverStyle : {}),
                ...(isFocused ? styles.buttonFocusStyle : {}), // focus 스타일 적용
            }}
            onMouseEnter={() => setIsHovered(true)} // hover 시작
            onMouseLeave={() => setIsHovered(false)} // hover 종료
            onFocus={() => setIsFocused(true)} // focus 시작
            onBlur={() => setIsFocused(false)} // focus 종료
        >
            {loading ? '로딩 중...' : '더보기'}
        </button>
    );
};

export default LoadMoreButton;
