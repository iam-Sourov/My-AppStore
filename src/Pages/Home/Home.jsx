import React from 'react';
import Banner from './Banner/Banner';
import Hero from './Hero/Hero';
import State from './State/State';
import TopApps from './TopApps/TopApps';

const Home = () => {
    return (
        <div>
            <section className='container mx-auto'>
                <Hero></Hero>
            </section>
            <Banner></Banner>
            <State></State>
            <TopApps></TopApps>
        </div>

    );
};

export default Home;