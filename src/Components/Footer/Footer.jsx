import React from 'react';
import Logo from '../../assets/logo.png'
import AppleStore from '../../assets/appleStore.svg'
import GoogleStore from '../../assets/googleStore.svg'
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-base-100 border-t border-border-color mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center py-8">
                    <div className="flex items-center gap-2">
                        <img className='w-10 h-10' src={Logo} alt="Logo" />
                        <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Hero.IO</span>
                    </div>
                    <nav className="flex gap-4 mt-4 md:mt-0">
                        <Link to={'https://play.google.com/store/games?hl=en'}>
                            <img src={GoogleStore} alt="Google Play Store" className="h-10" />
                        </Link>
                        <Link to={'https://www.apple.com/app-store/'}>
                            <img src={AppleStore} alt="Apple App Store" className="h-10" />
                        </Link>
                    </nav>
                </div>
                <div className='text-center py-4 border-t border-border-color'>
                    <p className="text-content-secondary">Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;