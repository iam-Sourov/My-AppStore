import React from 'react';
import { Link } from 'react-router';
import ErrorImg from '../../../assets/error-404.png'

const Error404 = () => {
    return (
        <div className=''>
            <div className="card bg-white w-full shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={ErrorImg}
                        alt="Error"
                        className=" h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl">Oops, page not found!</h2>
                    <p>The page you are looking for is not available.</p>
                    <div className="card-actions">
                        <Link to={'/'} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white ">Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error404;