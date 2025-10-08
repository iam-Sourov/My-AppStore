import React, { useEffect, useState } from 'react';
import InstalledApps from './InstalledApps';
import DownTick from '../../assets/downTick.svg'


const Installation = () => {
    const [installedApp, setInstalledApp] = useState([]);
    console.log(installedApp);

    useEffect(() => {
        const selectInstallList = JSON.parse(localStorage.getItem('Installed'))
        if (selectInstallList) setInstalledApp(selectInstallList)
    }, [])
    return (
        <div className='mt-6 '>
            <div className=' text-center space-y-6 mb-6'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-2xl text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                <div className=' container mx-auto'>
                    <div className='flex justify-between items-center mb-6 p-2'>
                        <div className='font-semibold text-2xl'>(<span>{installedApp.length}</span>) Apps Found</div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1">Sort By Size <img src={DownTick} alt="Arrow" /> </div>
                            <ul tabIndex={0} className="dropdown-content menu  rounded-box z-1 right-30 w-40 p-2 shadow-sm">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        {
                            installedApp.map(iApp => <InstalledApps key={iApp.id} iApp={iApp}></InstalledApps>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installation;