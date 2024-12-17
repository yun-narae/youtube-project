import primitives from './primitives';

const { color } = primitives;

export const THEME_MODE = {
  LIGHT: 'light',
  DARK: 'dark',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  [THEME_MODE.LIGHT]: {
    textColor: color.gray[800],
    backgroundColor: color.white,
    accentColor: color.gray[500],

    Header: {
      backgroundColor: color.gray[100],
      textColor: color.gray[800],
      borderColor: color.stone[200],
    },
    ThemeSwitch: {
      borderColor: color.gray[800],
      ballColor: color.gray[800],
    },
    Navigation: {
      navbackgroundColor: color.gray[200],
      activenavbackgroundColor: color.gray[200],
      keywordBorderColor: color.stone[300],
      activeKeywordBorderColor: color.stone[600],
    },
    Main: {
      backgroundColor: color.white,
    },
    SearchInput: {
      backgroundColor: color.gray[100],
      borderColor: color.gray[200],
      textColor: color.black,
    },
    Today: {
      backgroundColor: color.gray[100],
      borderColor: color.gray[200],
      textColor: color.black,
      textinfoColor: color.gray[600],
      labelbackgroundColor: color.gray[300],
      labeltextColor: color.gray[700],
    }
  },
  [THEME_MODE.DARK]: {
    textColor: color.white,
    backgroundColor: color.gray[900],
    accentColor: color.gray[500],

    Header: {
      backgroundColor: color.gray[900],
      textColor: color.gray[100],
      borderColor: color.gray[800],
    },
    ThemeSwitch: {
      borderColor: color.gray[200],
      ballColor: color.gray[200],
    },
    Navigation: {
      navbackgroundColor: color.gray[200],
      activenavbackgroundColor: color.gray[800],
      keywordBorderColor: color.stone[700],
      activeKeywordBorderColor: color.stone[400],
    },
    Main: {
      backgroundColor: color.black,
    },
    SearchInput: {
      backgroundColor: color.gray[900],
      borderColor: color.gray[800],
      textColor: color.white,
    },
    Today: {
      backgroundColor: color.gray[900],
      borderColor: color.gray[800],
      textColor: color.white,
      textinfoColor: color.gray[500],
      labelbackgroundColor: color.gray[800],
      labeltextColor: color.gray[300],
    }
  },
};