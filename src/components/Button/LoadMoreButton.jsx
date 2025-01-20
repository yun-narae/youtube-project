import React from 'react';

const LoadMoreButton = ({ onClick, loading, theme }) => {
    const {
        textColor,
        Button: { backgroundColor},
    } = theme;

    const styles = {
        // textColor: { color: textColor },
        buttonStyle: {
            backgroundColor:backgroundColor,
            color: textColor
        }
    }

    return (
        <button
            onClick={onClick}
            disabled={loading}
            style={styles.buttonStyle}
        >
            {loading ? '로딩 중...' : '더보기'}
        </button>
    )
};

export default LoadMoreButton;
