import React from 'react';

const State = () => {
    return (
        <div className='w-full bg-gradient-to-r from-primary to-secondary p-8 my-12'>
            <div className="container mx-auto">
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold text-white'>Trusted by Millions, Built for You</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-white'>
                    <div className="card bg-white/10 backdrop-blur-sm shadow-lg">
                        <div className="card-body items-center text-center">
                            <p className='text-white/70'>Total Downloads</p>
                            <h2 className="card-title text-5xl font-bold">29.6M</h2>
                            <p className='text-white/70'>21% more than last month</p>
                        </div>
                    </div>
                    <div className="card bg-white/10 backdrop-blur-sm shadow-lg">
                        <div className="card-body items-center text-center">
                            <p className='text-white/70'>Total Reviews</p>
                            <h2 className="card-title text-5xl font-bold">906K</h2>
                            <p className='text-white/70'>46% more than last month</p>
                        </div>
                    </div>
                    <div className="card bg-white/10 backdrop-blur-sm shadow-lg">
                        <div className="card-body items-center text-center">
                            <p className='text-white/70'>Active Apps</p>
                            <h2 className="card-title text-5xl font-bold">132+</h2>
                            <p className='text-white/70'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default State;