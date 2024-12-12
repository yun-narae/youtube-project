import primitives from './primitives';

const { color } = primitives;

export const THEME_MODE = {
  LIGHT: 'light',
  DARK: 'dark',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  [THEME_MODE.LIGHT]: {
    forground: color.gray[800],
    background: color.white,
    accent: color.gray[500],

    Header: {
      background: color.gray[100],
      label: color.gray[800],
      border: color.stone[200],
      keywordborder: color.stone[300],
    },
    Switch: {
      border: color.gray[800],
      ball: color.gray[800],
    },
    NavActive: {
      navbackground: color.gray[200],
      keywordactiveborder: color.stone[600],
    }

  },
  [THEME_MODE.DARK]: {
    forground: color.white,
    background: color.gray[900],
    accent: color.gray[500],

    Header: {
      background: color.gray[900],
      label: color.gray[100],
      border: color.gray[800],
      keywordborder: color.stone[700],
    },
    Switch: {
      border: color.gray[200],
      ball: color.gray[200],
    },
    NavActive: {
      navbackground: color.gray[800],
      keywordactiveborder: color.stone[400],

    }
  },
};
