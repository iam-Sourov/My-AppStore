import React from 'react';
import useData from '../../../Hooks/useData';
import TopAppCard from './TopAppCard/TopAppCard';
import { Link } from 'react-router';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';

const TopApps = () => {
    const { appData, loading } = useData();
    const topApps = appData.slice(0, 8);

    return (
        <div className='container mx-auto py-12'>
            <div className='text-center space-y-4 mb-8'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-xl text-content-secondary'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {
                loading ? <LoadingSpinner /> : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4'>
                        {topApps.map(topApp => <TopAppCard key={topApp.id} topApp={topApp} />)}
                    </div>
                )
            }
            <div className='text-center mt-8'>
                <Link to={'/apps'} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Show All</Link>
            </div>
        </div>
    );
};

export default TopApps;