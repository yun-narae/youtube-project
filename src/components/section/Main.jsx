import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Main = (props) => {
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
                <main id='main' role='main'>
                    {props.children}
                </main>
            <Footer />
        </HelmetProvider>
    )
}

export default Main
