import React from "react";
import logo from '../../assets/logo.png'

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-white/70 backdrop-blur-sm z-50">
            <div className=" w-20 h-20 flex items-center justify-center">
                <img
                    src={logo}
                    alt="App Logo"
                    className="w-15 h-15 animate-spin z-10" />
            </div>
            <p className=" pl-4 mt-2 text-xl items-center text-gray-500 font-semibold  animate-pulse">
                Loading...
            </p>
        </div>
    );
};

export default LoadingSpinner;
