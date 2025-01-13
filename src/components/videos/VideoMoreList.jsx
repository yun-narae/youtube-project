import React, { useState, useEffect } from 'react';
import LoadMoreButton from '../Button/LoadMoreButton';

const VideoMoreList = ({ items, renderItem, breakpoint = 780, mobileCount = 10, desktopCount = 20 }) => {
    const [displayedItems, setDisplayedItems] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= breakpoint);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    useEffect(() => {
        const initialCount = isMobile ? mobileCount : desktopCount;
        setDisplayedItems(items.slice(0, initialCount));
        setShowMore(items.length > initialCount);
    }, [isMobile, items, mobileCount, desktopCount]);

    const handleLoadMore = () => {
        const currentCount = displayedItems.length;
        const loadCount = isMobile ? mobileCount : desktopCount;
        const nextItems = items.slice(currentCount, currentCount + loadCount);
        setDisplayedItems((prev) => [...prev, ...nextItems]);

        if (currentCount + nextItems.length >= items.length) {
            setShowMore(false);
        }
    };

    return (
        <div className="responsive-paginated-list">
            <div className="items-container">
                {displayedItems.map((item, index) => (
                    <div key={index} className="item">
                        {renderItem(item, index)}
                    </div>
                ))}
            </div>
            {showMore && (
                <div className="load-more">
                    <LoadMoreButton onClick={handleLoadMore} loading={false} />
                </div>
            )}
        </div>
    );
};

export default VideoMoreList;
