import React from 'react';
import AppleStore from '../../../assets/appleStore.svg'
import GoogleStore from '../../../assets/googleStore.svg'

const Hero = () => {
    return (
        <div className="hero bg-white h-96">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-6xl font-bold md:text-nowrap">We Build <br />
                        <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                    <p className="py-6 text-[#627382]">
                        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className='space-x-4'>
                        <button className="btn border-gray-400 "><img src={GoogleStore} alt="" /> Google Play</button>
                        <button className="btn border-gray-400 "><img src={AppleStore} alt="" /> App Store</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;