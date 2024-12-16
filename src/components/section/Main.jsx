import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTheme } from '../../contexts/theme';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';

const Main = (props) => {
    const { theme } = useTheme();

    const {
        Main: { backgroundColor },
    } = theme;

    const mainbackgroundColor = {
        backgroundColor: backgroundColor,
    };

    return (
        <HelmetProvider>
            <Helmet
                titleTemplate="%s | Webs Youtube" 
                defaultTitle="Webs Youtube" 
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>
            
            <Header />
            <main id='main' role='main' style={mainbackgroundColor}>
                <Search />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>
    )
}

export default Main
