import { Sidebar } from '@/component/Sidebar';
import { userSession } from '@/lib/session';
import React from 'react';

const DeshboardLayout = async ({ children }) => {
    const user = await userSession()
    return (

        <div className='w-full'>
            <div className='flex'>
                <div className='absolute md:static mt-2'>
                    <Sidebar user={user} />
                </div>
                <div className='flex-1 mt-10 md:m-10 mx-auto'>
                    {children}
                </div>
            </div>
        </div>



    );
};

export default DeshboardLayout;