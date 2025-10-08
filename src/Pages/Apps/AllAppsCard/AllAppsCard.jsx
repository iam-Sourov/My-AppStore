import React from 'react';
import downIcon from '../../../assets/icon-downloads.png'
import ratingIcon from '../../../assets/icon-ratings.png'
import AppError from '../../Error/AppError/AppError';
import { Link } from 'react-router';

const AllAppsCard = ({ allApps }) => {
    const { id, title, image, downloads, ratingAvg } = allApps;
    console.log(allApps);

    return (
        <div className=''>
            <Link to={`/appDetails/${id}`}>
                <div className="card bg-white shadow-sm hover:scale-105 transition ease-in-out hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  hover:text-white">
                    <figure>
                        <img className='mt-6 w-40 h-40 p-2 object-cover'
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title hover:text-white">
                            {title}
                        </h2>
                        <div className="card-actions justify-between">
                            <div className="badge border-none bg-[#F1F5E8] text-[#00D390]"><img className='w-3 h-3' src={downIcon} alt="" />{downloads} M</div>
                            <div className="badge border-none bg-[#FFF0E1] text-[#FF8811]"> <img className='w-3 h-3' src={ratingIcon} alt="" />{ratingAvg}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AllAppsCard;