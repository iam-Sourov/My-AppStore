import React from 'react';
import Logo from '../../assets/logo.png'
import AppleStore from '../../assets/appleStore.svg'
import GoogleStore from '../../assets/googleStore.svg'
import { Link } from 'react-router';



const Footer = () => {
    // 
    return (
        <div className=''>
            <footer className=" h-40 bg-[#001931] text-primary-content p-5">
                <div className='flex justify-between items-center'>
                    <div className=' '>
                        <div className='flex justify-between items-center gap-2 p-5'>
                            <img className='w-10 h-10' src={Logo} alt="" />
                            <p className="font-bold text-xl">
                                Hero.IO
                            </p>
                        </div>
                    </div>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <Link to={'https://play.google.com/store/games?hl=en'}>
                                <img src={GoogleStore} alt="" />
                            </Link>
                            <Link to={'https://www.apple.com/app-store/'}>
                                <img src={AppleStore} alt="" />
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className='text-center'>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;