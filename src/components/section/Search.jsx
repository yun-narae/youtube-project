import React, { useState } from 'react'
import { useTheme } from '../../contexts/theme';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const { theme } = useTheme();
    const [ searchKeyword, setSearchKeyword ] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        // searchKeyword가 공백이거나 빈 문자열인 경우 경고 표시
        if (!searchKeyword.trim()) {
            alert('검색 결과가 없습니다.');
            return; // 검색 수행 중단
        }
        
        console.log(searchKeyword);

        navigate(`/search/${searchKeyword}`);
        setSearchKeyword('');
    };

    const {
        SearchInput: { backgroundColor, borderColor, inputbackgroundColor, inputborderColor, textColor},
    } = theme;

    const innerStyle = {
        backgroundColor: backgroundColor, borderColor: borderColor,
    };

    const inputStyle = {
        backgroundColor: inputbackgroundColor,
        borderColor: inputborderColor,
        color: textColor
    };

    return (
    <div id='search'>
        <div className='search__inner' style={innerStyle}>
            <label htmlFor="searchInput">
                <span className='ir'>검색</span>
            </label>
            <input 
                style={inputStyle}
                type='search' 
                name='searchInput' 
                id='searchInput'
                autoComplete='off'
                className='search__input'
                placeholder="검색어를 입력하세요" 
                onChange={e => setSearchKeyword(e.target.value)} // 값을 setSearchKeyword에 전달
                onKeyDown={e => {
                    if(e.key === 'Enter'){
                        handleSearch(); // Enter를 치면 handleSearch함수 실행
                    }
                }}
            />
        </div>
    </div>
    )
}

export default Search