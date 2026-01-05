import React from 'react';
import AppleStore from '../../../assets/appleStore.svg'
import GoogleStore from '../../../assets/googleStore.svg'
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className="hero bg-base-100 py-16">
            <div className="hero-content text-center">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl font-bold">We Build <br />
                        <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Productive</span> Apps
                    </h1>
                    <p className="py-6 text-lg text-content-secondary">
                        At <span className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold'>HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className='space-x-4'>
                        <Link to={'https://play.google.com/store/games?hl=en'} className='btn btn-outline border-border-color'> <img src={GoogleStore} alt="Google Play" className="h-6" />Google Play</Link>
                        <Link to={'https://www.apple.com/app-store/'} className='btn btn-outline border-border-color'> <img src={AppleStore} alt="Apple Store" className="h-6" />Apple Store</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;