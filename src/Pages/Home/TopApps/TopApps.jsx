import React from 'react';
import useData from '../../../Hooks/useData';
import TopAppCard from './TopAppCard/TopAppCard';
import { Link } from 'react-router';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';

const TopApps = () => {
    const { appData, loading } = useData();
    const topApps = appData.slice(0, 8);


    return (
        <div className='container mx-auto mt-3'>
            <div className='text-center space-y-6 mb-6'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-2xl text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {
                loading ? <LoadingSpinner></LoadingSpinner> : <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6'>
                    {
                        topApps.map(topApp => <TopAppCard key={topApp.id} topApp={topApp} loading={loading}></TopAppCard>)
                    }
                </div>
            }
            <div className='text-center'>
                <Link to={'/apps'} className="btn m-6 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">Show All</Link>
            </div>
        </div>
    );
};

export default TopApps;