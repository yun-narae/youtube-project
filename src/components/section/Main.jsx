import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTheme } from '../../contexts/theme';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import ScrollTo from '../../utils/scrollTo';

const Main = (props) => {
    const { theme } = useTheme();
    const [ isMenuActive, setIsMenuActive ] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    }

    const {
        Main: { backgroundColor },
    } = theme;

    const mainbackgroundColor = {
        backgroundColor: backgroundColor,
    };

    return (
        <HelmetProvider>
            <ScrollTo />
            <Helmet
                titleTemplate="%s | Developer Youtube" 
                defaultTitle="Developer Youtube" 
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>
            
            <Header toggleMenu={toggleMenu} isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
            <main id='main' role='main' style={mainbackgroundColor}>
                <Search toggleMenu={toggleMenu} isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>
    )
}

export default Main
