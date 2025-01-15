import { primitives, semantics } from '../theme';
import { THEME_MODE } from '../theme/semantics';
import { createContext, useContext, useMemo, useState, useEffect } from 'react';

const { LIGHT, DARK } = THEME_MODE;

const THEME_STORAGE_KEY = 'theme_mode'; // localStorage에 저장할 키
const themeContext = createContext();

export function ThemeProvider(props) {
  const [mode, setMode] = useState(() => {
    // 브라우저 저장소에서 초기 테마 값을 가져옴
    const storedMode = localStorage.getItem(THEME_STORAGE_KEY);
    return storedMode ? storedMode : THEME_MODE.LIGHT; // 저장된 값이 없으면 기본값 LIGHT
  });

  useEffect(() => {
    // 테마 변경 시 브라우저 저장소에 저장
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode]);

  const themeValue = useMemo(() => {
    const toggleMode = () => setMode((prevMode) => (prevMode === LIGHT ? DARK : LIGHT));
    const setLightMode = () => setMode(LIGHT);
    const setDarkMode = () => setMode(DARK);

    return {
      mode,
      isDarkMode: mode === DARK,
      theme: semantics[mode],
      color: primitives.color,
      toggleMode,
      setLightMode,
      setDarkMode,
    };
  }, [mode]);

  return <themeContext.Provider value={themeValue} {...props} />;
}

/** @type {(selector: (state: any) => state) => state} */
export function useTheme(selector = (state) => state) {
  const themeValue = useContext(themeContext);

  if (!themeValue) {
    throw new Error(
      'useTheme() 훅은 ThemeContext의 내부에서만 사용 가능합니다.'
    );
  }

  if (typeof selector === 'function') {
    return selector(themeValue);
  }

  return themeValue;
}
