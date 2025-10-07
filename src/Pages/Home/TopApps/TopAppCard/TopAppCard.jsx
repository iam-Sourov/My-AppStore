import React from 'react';
import downIcon from '../../../../assets/icon-downloads.png'
import ratingIcon from '../../../../assets/icon-ratings.png'
const TopAppCard = ({ topApp }) => {
    console.log(topApp);
    
    const { id, title, image,downloads,ratingAvg } = topApp;
    console.log(id);
    
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img className='w-40 h-40 object-cover'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="card-actions justify-between">
                    <div className="badge bg-[#F1F5E8] text-[#00D390]"><img className='w-3 h-3' src={downIcon} alt="" />{downloads} M</div>
                    <div className="badge bg-[#FFF0E1] text-[#FF8811]"> <img className='w-3 h-3' src={ratingIcon} alt="" />{ratingAvg}</div>
                </div>
            </div>
        </div>
    );
};

export default TopAppCard;