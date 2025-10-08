import React, { useState } from 'react';
import useData from '../../Hooks/useData';
import AllAppsCard from './AllAppsCard/AllAppsCard';


const AllApps = () => {
    const { appData } = useData();
    const [search, setSearch] = useState('');
    console.log(search);
    const term = search.trim().toLowerCase();
    const searchedApp = term ? appData.filter(app => app.title.toLowerCase().includes(term)) : appData;

    return (
        <div className='mt-6'>
            <div className=' text-center space-y-6 mb-6'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='text-2xl text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center px-6'>
                <div>(<span>{searchedApp.length}</span>) Apps Found</div>
                <div>
                    <label className='input'>
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            type='search'
                            placeholder='Search Products' />
                    </label>
                </div>
            </div>
            <div className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6'>
                {
                    searchedApp.map(allApps => <AllAppsCard key={allApps.id} allApps={allApps}></AllAppsCard>)

                }
            </div>

        </div>
    );
};

export default AllApps;