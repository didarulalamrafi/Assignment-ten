import UserProfile from '@/component/Profile';
import { userSession } from '@/lib/session';
import React, { Suspense } from 'react';

const ProfilePage = async () => {
    const user = await userSession()
    return (
        <div>
            <Suspense fallback={<h1>loading...</h1>}>
                <UserProfile user={user}></UserProfile>
            </Suspense>

        </div>
    );
};

export default ProfilePage;