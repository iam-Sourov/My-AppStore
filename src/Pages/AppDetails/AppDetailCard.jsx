import React from 'react';
import RatingIcon from '../../assets/icon-ratings.png'
import DownIcon from '../../assets/icon-downloads.png'
import ReviewIcon from '../../assets/icon-review.png'
import Ratings from './Ratings';
import Description from './Description';

const AppDetailCard = ({ appDetails }) => {
    const { id, image, title, downloads, ratingAvg, reviews, ratings, size, description } = appDetails;

    const handleAddToInstall = () => {
        localStorage.setItem('Installation', JSON.stringify(appDetails));
    }
    return (
        <div>
            <div className="hero bg-white mt-4">
                <div className="hero-content w-full flex-col justify-between p-2 lg:flex-row">
                    <div className=''>
                        <img
                            src={image} alt=''
                            className="max-w-sm rounded-lg" />
                    </div>
                    <div className='w-[70%] bg-white p-2 '>
                        <h1 className="text-5xl font-bold mb-2">{title}</h1>
                        <p className="">
                            Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold'>Productive.io</span>
                        </p>
                        <div className="divider divider-neutral"></div>
                        <div className='h-full flex flex-col md:flex-row justify-center items-center gap-2 p-2'>
                            <div className="card bg-transparent w-full h-full shadow-sm">
                                <div className="card-body flex flex-col space-y-1 items-start">
                                    <img src={DownIcon} alt="" />
                                    <p className='text-black'>Downloads</p>
                                    <h1 className="card-title text-2xl"><span>{downloads}</span>M</h1>
                                </div>
                            </div>
                            <div className="card bg-transparent w-full h-full shadow-sm">
                                <div className="card-body flex flex-col space-y-1 items-start">
                                    <img src={RatingIcon} alt="" />
                                    <p className='text-black'>Average Ratings</p>
                                    <h1 className="card-title text-2xl"><span>{ratingAvg}</span>K</h1>
                                </div>
                            </div>
                            <div className="card bg-transparent w-full h-full shadow-sm">
                                <div className="card-body flex flex-col space-y-1 items-start">
                                    <img src={ReviewIcon} alt="" />
                                    <p className='text-black'>Total</p>
                                    <h1 className="card-title text-2xl"><span>{reviews}</span>+</h1>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => { handleAddToInstall(id) }} className="btn bg-gradient-to-r from-[#54CF68] to-[#00827A] text-white ">Install Now <span>({size})</span>MB</button>
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