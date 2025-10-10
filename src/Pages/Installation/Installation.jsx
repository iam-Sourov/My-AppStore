import React, { useState } from 'react';
import InstalledApps from './InstalledApps';
import AppError from '../Error/AppError/AppError';
import { loadInstallData } from '../../Utilities/CustomFunctions';
import useData from '../../Hooks/useData';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { toast } from 'react-toastify';


const Installation = () => {
    const { loading } = useData();
    // Sorting
    const [sort, setSort] = useState('none');

    const [installedApp, setInstalledApp] = useState(() => loadInstallData());
    console.log(installedApp);

    if (!installedApp.length) return <AppError></AppError>

    const sortByDown = () => {
        if (sort === 'sort-asc') {
            return [...installedApp].sort((a, b) => b.downloads - a.downloads);
        } else if (sort === 'sort-desc') {
            return [...installedApp].sort((a, b) => a.downloads - b.downloads);
        } else {
            return installedApp;
        }
    }
    
    
    const handleRemoveUninstall = (id) => {
        const existingList = JSON.parse(localStorage.getItem('Installed'))
        const updatedList = existingList.filter(app => app.id !== id);
        setInstalledApp(updatedList);
        localStorage.setItem('Installed', JSON.stringify(updatedList));
        localStorage.removeItem(`installDisabled_${id}`);
        toast('App Uninstalled');
    }
    return (
        <div className='mt-6 '>
            <div className=' text-center space-y-6 mb-6'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-2xl text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                <div className=' container mx-auto'>
                    <div className='flex justify-between items-center mb-6 p-2'>
                        <div className='font-semibold text-2xl'>(<span>{installedApp.length}</span>) Apps Found</div>
                        <div className=" text-gray-500">
                            <label className='form-control w-full max-w-xs'>
                                <select className="select select-bordered" onChange={(e) => setSort(e.target.value)}>
                                    <option value="none">Sort By Download</option>
                                    <option value="sort-asc">High - Low</option>
                                    <option value="sort-desc">Low - High </option>
                                </select>
                            </label>
                        </div>
                    </div>
                    {
                        loading ? <LoadingSpinner></LoadingSpinner> : <div className='flex flex-col gap-3'>
                            {
                                sortByDown().map(iApp => <InstalledApps key={iApp.id} iApp={iApp} handleRemoveUninstall={handleRemoveUninstall}></InstalledApps>)
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;