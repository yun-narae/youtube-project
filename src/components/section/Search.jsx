import React from 'react'
import { useTheme } from '../../contexts/theme';

const Search = () => {
    const { theme } = useTheme();

    const {
        SearchInput: { backgroundColor, borderColor, textColor},
    } = theme;

    const inputStyle = {
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: textColor
    };

    return (
    <div id='search'>
        <div className='search__inner'>
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
            />
        </div>
    </div>
    )
}

export default Search