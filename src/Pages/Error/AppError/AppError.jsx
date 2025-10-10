import React from 'react';
import AppErrorImg from '../../../assets/App-Error.png'
import { Link } from 'react-router';
import useData from '../../../Hooks/useData';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
const AppError = () => {
    const { loading } = useData();

    return (
        <div>
            {
                loading ? <LoadingSpinner></LoadingSpinner> : <div className=''>
                    <div className="card bg-white w-full shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={AppErrorImg}
                                alt="Error"
                                className=" h-52" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-4xl">OPPS!! APP NOT FOUND</h2>
                            <p>The App you are requesting is not found on our system.  please try another apps</p>
                            <div className="card-actions">
                                <Link to={'/apps'} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white ">Back To Apps</Link>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default AppError;