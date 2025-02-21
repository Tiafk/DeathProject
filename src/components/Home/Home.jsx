import React from 'react';
import Main from "./other/Main";
import Services from "./other/Services";
import Footer from './other/Footer';

export default function MainPage() {
    return (
        <main>
            <Main/>
            <Services path="#Услуги"/>
            <Footer/>
        </main>
    );
};