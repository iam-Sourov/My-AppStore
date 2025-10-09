import React, { useState } from 'react';
import useData from '../../Hooks/useData';
import AllAppsCard from './AllAppsCard/AllAppsCard';
import SearchSpinner from '../../Components/LoadingSpinner/SearchSpinner';
import AppError from '../Error/AppError/AppError';



const AllApps = () => {
    const { appData, loading } = useData();
    const [search, setSearch] = useState('');
    const [searchLoading, setSearchLoading] = useState(false);

    const term = search.trim().toLowerCase();


    const searchedApp = term ? appData.filter(app => app.title.toLowerCase().includes(term)) : appData;

    const handleSearchChange = (e) => {
        setSearchLoading(true);
        setSearch(e.target.value);
        setTimeout(() => setSearchLoading(false), 300); // Simulate search delay
    };
    return (
        <div className='mt-6 p-2'>
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
                            onChange={
                                handleSearchChange
                                // setSearch(e.target.value)
                            }
                            type='search'
                            placeholder='Search Products' />
                    </label>
                </div>
            </div>
            {loading || searchLoading ? (
                <SearchSpinner />
            ) : searchedApp.length === 0 ? (
                <div className='text-center text-gray-400 text-2xl mt-10'>
                    <AppError></AppError>
                </div>
            ) : (
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
                    {searchedApp.map((allApps) => (
                        <AllAppsCard key={allApps.id} allApps={allApps} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllApps;