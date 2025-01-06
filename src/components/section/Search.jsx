import React, { useState } from 'react'
import { useTheme } from '../../contexts/theme';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const { theme } = useTheme();
    const [ searchKeyword, setSearchKeyword ] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(searchKeyword);
        if(searchKeyword){
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    }

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
                onChange={e => setSearchKeyword(e.target.value)}
                onKeyDown={e => {
                    if(e.key === 'Enter'){
                        handleSearch();
                    }
                }}
            />
        </div>
    </div>
    )
}

export default Search