import UserProfile from '@/component/Profile';
import { userSession } from '@/lib/session';
import React from 'react';

const AdminProfile = async () => {
    const user = await userSession()
    return (
        <div>
            <UserProfile user={user}></UserProfile>
        </div>
    );
};

export default AdminProfile;