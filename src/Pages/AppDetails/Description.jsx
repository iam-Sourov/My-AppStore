import React from 'react';

const Description = ({ description }) => {
    return (
        <div>
            <div className="mt-2 bg-[#F5F5F5] rounded-2xl">
                <div className='m-5'>
                    <h2 className="text-lg font-semibold p-2 text-gray-700">Description</h2>
                    <div className='p-2'>
                        {description}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Description;