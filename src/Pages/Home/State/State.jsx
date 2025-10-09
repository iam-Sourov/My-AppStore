import React from 'react';

const State = () => {
    return (
        <div className=' w-full  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-8 mb-6'>
            <div>
                <h1 className='text-4xl font-bold text-white text-center p-2'>Trusted by Millions, Built for You</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
                <div className="card bg-transparent w-full  md:w-60 md:h-50 shadow-sm">
                    <div className="card-body text-white flex flex-col space-y-3 items-center">
                        <p className='text-white/30'>Total Downloads</p>
                        <h1 className="card-title text-6xl">29.6M</h1>
                        <p className='text-white/30'>21% more than last month</p>
                    </div>
                </div>
                <div className="card bg-transparent w-full md:w-60 md:h-50 shadow-sm">
                    <div className="card-body text-white flex flex-col space-y-3 items-center">
                        <p className='text-white/30'>Total Reviews</p>
                        <h1 className="card-title text-6xl">906K</h1>
                        <p className='text-white/30'>46% more than last month</p>
                    </div>
                </div>
                <div className="card bg-transparent w-full md:w-60 md:h-50 shadow-sm">
                    <div className="card-body text-white flex flex-col space-y-3 items-center">
                        <p className='text-white/30'>Active Apps</p>
                        <h1 className="card-title text-6xl">132+</h1>
                        <p className='text-white/30'>31 more will Launch</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default State;