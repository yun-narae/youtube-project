import { primitives, semantics } from '../theme';
import { THEME_MODE } from '../theme/semantics';
import { createContext, useContext, useMemo, useState } from 'react';

const { LIGHT, DARK } = THEME_MODE;

const themeContext = createContext();

export function ThemeProvider(props) {
  const [mode, setMode] = useState(THEME_MODE.LIGHT);

  const themeValue = useMemo(() => {
    // 테마 컨텍스트 값 변경 함수(기능) 추가
    const toggleMode = () => setMode(mode === LIGHT ? DARK : LIGHT);
    const setLightMode = () => setMode(LIGHT);
    const setDarkMode = () => setMode(DARK);

    // 테마 컨텍스트 값 반환
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
