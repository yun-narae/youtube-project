import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch';
import LoadMoreButton from '../components/Button/LoadMoreButton';

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loadingMore, setLoadingMore] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInitialVideos = async () => {
            try {
                const response = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                );
                const result = await response.json();
                setVideos(result.items);
                setNextPageToken(result.nextPageToken || null);
            } catch (error) {
                console.error('초기 데이터 가져오기 오류:', error);
            } finally {
                setLoading(false);
            }
        };

        if (searchId) {
            fetchInitialVideos();
        }
    }, [searchId]);

    const fetchVideos = async (searchQuery, pageToken) => {
        try {
            setLoadingMore(true);
            const response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&pageToken=${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
            );
            const result = await response.json();
            setVideos((prevVideos) => [...prevVideos, ...result.items]);
            setNextPageToken(result.nextPageToken || null);
        } catch (error) {
            console.error('추가 데이터 가져오기 오류:', error);
        } finally {
            setLoadingMore(false);
        }
    };

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    };

    return (
        <Main
            title="유투브 검색"
            description="유튜브 검색 결과 페이지입니다."
        >    
            <section id="searchPage">
                <h2><em>{searchId}</em> 검색 결과입니다.</h2>
                <div className="video__inner search">
                    <VideoSearch videos={videos} loading={loading} />
                </div>
                {nextPageToken && (
                    <div className="video__more">
                        <LoadMoreButton
                            onClick={handleLoadMore}
                            loading={loadingMore}
                        />
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Search;
