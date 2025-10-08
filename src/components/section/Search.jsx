import React, { useState } from 'react'
import { useTheme } from '../../contexts/theme';
import { useNavigate } from 'react-router-dom';
import NavToggle from '../Button/NavToggle';
import Icon from '../Icon/Icon';

let debounceTimer; // 컴포넌트 외부에 변수 선언

const Search = ({ isMenuActive, toggleMenu }) => {
    const { theme } = useTheme();
    const [ searchKeyword, setSearchKeyword ] = useState('');
    const navigate = useNavigate();

    // debounce 함수 정의
    const debounce = (func, delay) => {
        return function (...args) {
            if (debounceTimer) {
                clearTimeout(debounceTimer); // 기존 타이머 제거
            }
            debounceTimer = setTimeout(() => {
                func.apply(this, args); // 함수 호출
            }, delay);
        };
    };

    // debounce를 적용한 함수
    const handleDebouncedInput = debounce((value) => {
        console.log(`Debounced 입력값: ${value}`);
        // 추가 로직 실행 가능
    }, 1000);

    const handleSearch = () => {
        // searchKeyword가 공백이거나 빈 문자열인 경우 경고 표시
        if (!searchKeyword.trim()) {
            alert('검색 결과가 없습니다.');
            return;
        }
        console.log(`검색어: ${searchKeyword}`);

        navigate(`/search/${searchKeyword.trim()}`);
        setSearchKeyword('');
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchKeyword(value);
        handleDebouncedInput(value); // debounce 적용
        // console.log(`입력 중: ${value}`); // 입력값 확인
    };

    const {
        textColor,
        Header: { navBtnbackColor, navBtnbackColorHover },
        SearchInput: { backgroundColor, borderColor, inputbackgroundColor, inputborderColor, searchtextColor},
    } = theme;

    const styles = {
        innerStyle: {
            backgroundColor: backgroundColor, 
            borderColor: borderColor,
        },

        textStyles: {
            color: textColor
        },

        inputStyle: {
            backgroundColor: inputbackgroundColor,
            borderColor: inputborderColor,
            color: searchtextColor
        },

        navMenuStyles: {
            backgroundColor: navBtnbackColor,
        },

        navMenuHoverStyles: {
            backgroundColor: navBtnbackColorHover,
        },
    }

    return (
    <div id='search'>
        <div className='search__inner' style={styles.innerStyle}>
                <NavToggle 
                    isMenuActive={isMenuActive}
                    toggleMenu={toggleMenu}
                    navBtnbackColor={navBtnbackColor}
                    navBtnbackColorHover={navBtnbackColorHover}
                    textColor={textColor}
                />
            <label htmlFor="searchInput">
                <span className='ir'>검색</span>
            </label>
            <div className='search__input'>
                <input
                    style={styles.inputStyle}
                    type='search'
                    name='searchInput'
                    id='searchInput'
                    autoComplete='off'
                    placeholder="검색어를 입력하세요"
                    onChange={handleInputChange} // 값을 setSearchKeyword에 전달
                    onKeyDown={e => {
                        if(e.key === 'Enter'){
                            handleSearch(); // Enter를 치면 handleSearch함수 실행
                        }
                    }}
                />
                <Icon
                    name="search"
                    size={30}
                    className="search__icon"
                />
            </div>
        </div>
    </div>
    )
}

export default Search