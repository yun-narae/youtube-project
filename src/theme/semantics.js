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

        Button: {
            backgroundColor: color.gray[100],
        },
        Header: {
            backgroundColor: color.gray[100],
            textColor: color.gray[800],
            borderColor: color.gray[200],
            navMenuColor: color.gray[200],
            logoColor: color.black,
        },
        Footer: {
            backgroundColor: color.gray[100],
            textColor: color.gray[500]
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
            backgroundColor: color.white,
            borderColor: color.gray[100],
            inputbackgroundColor: color.gray[100],
            inputborderColor: color.gray[200],
            searchtextColor: color.black,
        },
        Today: {
            backgroundColor: color.gray[100],
            borderColor: color.gray[200],
            textColor: color.black,
            textinfoColor: color.gray[600],
            labelbackgroundColor: color.gray[300],
            labeltextColor: color.gray[700],
        },
        Skeleton: {
            SkeletonbackgroundColor: color.gray[100],
            SkeletoncardbackgroundColor: color.gray[200],
        },
        Video: {
            DetailbackgroundColor: color.gray[100],
        }
    },
    [THEME_MODE.DARK]: {
        textColor: color.white,
        backgroundColor: color.gray[900],
        accentColor: color.gray[500],
        
        Button: {
            backgroundColor: color.gray[900],
        },
        Header: {
            backgroundColor: color.gray[900],
            textColor: color.gray[100],
            borderColor: color.gray[800],
            navMenuColor: color.gray[800],
            logoColor: color.white,
        },
        Footer: {
            backgroundColor: color.gray[900],
            textColor: color.gray[600]
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
            backgroundColor: color.black,
            borderColor: color.gray[800],
            inputbackgroundColor: color.gray[900],
            inputborderColor: color.gray[800],
            searchtextColor: color.white,
        },
        Today: {
            backgroundColor: color.gray[900],
            borderColor: color.gray[800],
            textColor: color.white,
            textinfoColor: color.gray[500],
            labelbackgroundColor: color.gray[800],
            labeltextColor: color.gray[300],
        },
        Skeleton: {
            SkeletonbackgroundColor: color.gray[800],
            SkeletoncardbackgroundColor: color.gray[900],
        },
        Video: {
            DetailbackgroundColor: color.gray[900],
        }
    },
};