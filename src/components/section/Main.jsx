import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Main = (props) => {
    return (
        <>
            <Header />
                <main id='main' role='main'>
                    {props.children}
                </main>
            <Footer />
        </>
    )
}

export default Main
