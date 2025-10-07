import React from 'react';
import useData from '../../Hooks/useData';
import AllAppsCard from './AllAppsCard';

const AllApps = () => {
    const { appData } = useData();

    return (
        <div className='mt-6'>
            <div className='text-center space-y-6 mb-6'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='text-2xl text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6'>
                {
                    appData.map(allApps => <AllAppsCard key={allApps.id} allApps={allApps}></AllAppsCard>)
                }
            </div>
            {/* <div className='text-center'>
                <Link to={'/apps'} className="btn m-6 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">Show All</Link>
            </div> */}
        </div>
    );
};

export default AllApps;