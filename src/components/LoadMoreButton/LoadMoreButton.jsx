import React from 'react';

const LoadMoreButton = ({ onClick, loading }) => (
    <button
        onClick={onClick}
        disabled={loading}
    >
        {loading ? '로딩 중...' : '더보기'}
    </button>
);

export default LoadMoreButton;
