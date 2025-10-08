import React from 'react';
import downIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'

const InstalledApps = (iApp) => {
    console.log(iApp);
    const { title,image,size,downloads,ratingAvg } = iApp.iApp;

    return (
        <div>
            <div className="p-2 shadow-sm flex justify-between items-center">
                <div className=' h-20 flex items-center gap-4'>
                    <img className='w-[80px] h-[80px] rounded-lg object-cover'
                        src={image}
                        alt="Movie" />
                    <div className=" flex flex-col">
                        <h2 className="card-title mb-2">{title}</h2>
                        <div className='flex gap-3'>

                            <div className="badge border-none bg-[#F1F5E8] text-[#00D390]"><img className='w-3 h-3' src={downIcon} alt="" />{downloads} M</div>
                            <div className="badge border-none bg-[#FFF0E1] text-[#FF8811]"> <img className='w-3 h-3' src={ratingIcon} alt="" />{ratingAvg}</div>
                            <div className="badge border-none text-gray-400">
                                <span>{size}</span> MB</div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn bg-[#00D390] text-white ">Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;