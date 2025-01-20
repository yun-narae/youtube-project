import React, { useState } from 'react'
import { useTheme } from '../../contexts/theme';
import { useNavigate } from 'react-router-dom';

let debounceTimer; // 컴포넌트 외부에 변수 선언

const Search = ({ isMenuActive, toggleMenu }) => {
    const { theme } = useTheme();
    const [isHovered, setIsHovered] = useState(false); // hover 상태 관리
    const [isFocused, setIsFocused] = useState(false); // focus 상태 관리
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
            <div
                className="btn-box"
                id="headerToggle"
                role="button"
                tabIndex="0"
                aria-controls="primary-menu"
                onClick={toggleMenu}
                onMouseEnter={() => setIsHovered(true)} // hover 시작
                onMouseLeave={() => setIsHovered(false)} // hover 종료
                onFocus={() => setIsFocused(true)} // focus 시작
                onBlur={() => setIsFocused(false)} // focus 종료
                style={{
                    ...styles.navMenuStyles, 
                    ...(isHovered ? styles.navMenuHoverStyles : {}),
                        ...(isFocused ? styles.navMenuHoverStyles : {}), // focus 스타일 적용
                }}
            >
                <span style={styles.textStyles}>{isMenuActive ? "햄" : "버거"}</span>
            </div>
            <label htmlFor="searchInput">
                <span className='ir'>검색</span>
            </label>
            <input 
                style={styles.inputStyle}
                type='search' 
                name='searchInput' 
                id='searchInput'
                autoComplete='off'
                className='search__input'
                placeholder="검색어를 입력하세요" 
                onChange={handleInputChange} // 값을 setSearchKeyword에 전달
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