import Link from 'next/link';
import React from 'react';
import { IoHome } from 'react-icons/io5';

const Logo = () => {
    return (
        <div>
            {/* LEFT */}
            <Link href="/" className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-cyan-500/10 border border-cyan-300/30">
                    <IoHome size={26} className="text-cyan-500" />
                </div>

                <h1 className="text-3xl font-bold tracking-wide">
                    Property<span className='text-cyan-400 italic'>Hub</span>
                </h1>
            </Link>
        </div>
    );
};

export default Logo;