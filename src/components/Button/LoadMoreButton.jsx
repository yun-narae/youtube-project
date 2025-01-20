import React, { useState } from 'react';

const LoadMoreButton = ({ onClick, loading, theme }) => {
    const [isHovered, setIsHovered] = useState(false); // hover 상태 관리

    const {
        textColor,
        Button: { buttonback, hoverbuttonback },
    } = theme;

    const styles = {
        buttonStyle: {
            backgroundColor: buttonback,
            color: textColor
        }
    }

    return (
        <button
            onClick={onClick}
            disabled={loading}
            style={{...styles.buttonStyle, backgroundColor: isHovered ? hoverbuttonback : '' }}
            onMouseEnter={() => setIsHovered(true)} // hover 시작
                onMouseLeave={() => setIsHovered(false)} // hover 종료
        >
            {loading ? '로딩 중...' : '더보기'}
        </button>
    )
};

export default LoadMoreButton;
