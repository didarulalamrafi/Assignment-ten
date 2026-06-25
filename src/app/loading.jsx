import React from 'react';
import { ScaleLoader } from 'react-spinners';

const LoadingPage = () => {
    return (

        <div className="flex justify-center items-center min-h-screen bg-slate-50">
            <div className="flex flex-col items-center gap-3">

                <ScaleLoader color="#ef4444" speedMultiplier={1.2} />

                <p className="text-sm font-medium text-slate-400 tracking-wide animate-pulse">
                    Please wait...
                </p>
            </div>
        </div>
    );
};

export default LoadingPage;