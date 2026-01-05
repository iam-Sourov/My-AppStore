import React from 'react';
import downIcon from '../../../../assets/icon-downloads.png'
import ratingIcon from '../../../../assets/icon-ratings.png'
import { Link } from 'react-router';

const TopAppCard = ({ topApp }) => {
    const { id, title, image, downloads, ratingAvg } = topApp;

    return (
        <Link to={`/appDetails/${id}`} className="card bg-base-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <figure className="px-4 pt-4">
                <img src={image} alt={title} className="rounded-xl h-40 w-full object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-center gap-2 mt-2">
                    <div className="badge badge-outline"><img className='w-3 h-3 mr-1' src={downIcon} alt="downloads" />{downloads} M</div>
                    <div className="badge badge-outline"><img className='w-3 h-3 mr-1' src={ratingIcon} alt="rating" />{ratingAvg}</div>
                </div>
            </div>
        </Link>
    );
};

export default TopAppCard;