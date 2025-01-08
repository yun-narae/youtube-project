import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch';
import { fetchFromAPI } from '../utils/api';


const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    
    useEffect(() => {
        // fetch(
        //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        // )
        // .then(response => response.json())
        // .then(result => {
        //     console.log(result);
        //     setVideos(result.items)
        // })
        // .catch(error => console.log(error));

        fetchFromAPI(`search?part=snippet&q=${searchId}`)
            .then((data) => setVideos(data.items))
            console.log('API Key:', process.env.REACT_APP_RAPID_API_KEY);

    }, [searchId]);


    return (
        <Main
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다."
        >    
            <section id='searchPage'>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
            </section>
        </Main>
    )
}

export default Search