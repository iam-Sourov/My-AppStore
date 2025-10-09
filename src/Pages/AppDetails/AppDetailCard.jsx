import React, { useEffect, useState } from 'react';
import RatingIcon from '../../assets/icon-ratings.png'
import DownIcon from '../../assets/icon-downloads.png'
import ReviewIcon from '../../assets/icon-review.png'
import Ratings from './Ratings';
import Description from './Description';
import { installationList } from '../../Utilities/CustomFunctions';
import { toast } from 'react-toastify';

const AppDetailCard = ({ appDetails }) => {
    const { id, image, title, downloads, ratingAvg, reviews, ratings, size, description } = appDetails;
    const [isButtonDisabled, setIsButtonDisabled] = useState(() => {

        return localStorage.getItem(`installDisabled_${id}`) === 'true';
    });
    useEffect(() => {
        localStorage.setItem(`installDisabled_${id}`, isButtonDisabled);
    }, [isButtonDisabled, id]);
    const handleInstallClick = () => {
        toast('Installed');
        setIsButtonDisabled(true);
        installationList(appDetails);
    };
    return (
        <div>
            <div className="hero bg-white mt-4">
                <div className="hero-content w-full flex-col justify-between p-2 lg:flex-row">
                    <div className=''>
                        <img
                            src={image} alt=''
                            className="bg-base-100 w-60 rounded-lg shadow-sm" />
                    </div>
                    <div className='md:w-[70%] bg-white p-2 '>
                        <h1 className="text-center md:text-left text-5xl font-bold mb-2">{title}</h1>
                        <p className="text-center md:text-left">
                            Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold'>Productive.io</span>
                        </p>
                        <div className="divider divider-neutral"></div>
                        <div className='h-full flex justify-center md:justify-start items-center gap-2 p-2'>
                            <div className="card bg-transparent shadow-sm  ">
                                <div className="card-body flex flex-col h-40 space-y-1 items-center">
                                    <img className='w-5' src={DownIcon} alt="" />
                                    <p className='text-black'>Downloads</p>
                                    <h1 className="card-title text-2xl"><span>{downloads}</span>M</h1>
                                </div>
                            </div>
                            <div className="card bg-transparent shadow-sm ">
                                <div className="card-body flex flex-col h-40 space-y-1 items-start">
                                    <img className='w-5' src={RatingIcon} alt="" />
                                    <p className='text-black'>Average Ratings</p>
                                    <h1 className="card-title text-2xl"><span>{ratingAvg}</span>K</h1>
                                </div>
                            </div>
                            <div className="card bg-transparent shadow-sm ">
                                <div className="card-body flex flex-col h-40 space-y-1 items-start">
                                    <img className='w-5' src={ReviewIcon} alt="" />
                                    <p className='text-black'>Total</p>
                                    <h1 className="card-title text-2xl"><span>{reviews}</span>+</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-start'>
                            <button onClick={handleInstallClick}
                                disabled={isButtonDisabled}
                                className={`btn bg-[#00D390] ${isButtonDisabled ? 'text-black' : 'text-white'}  `}>{`${isButtonDisabled ? 'Installed' : 'Install Now'}`} <span>({size})</span>MB</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider divider-neutral"></div>
            <Ratings ratings={ratings}></Ratings>
            <Description description={description}></Description>
        </div>
    );
};

export default AppDetailCard;