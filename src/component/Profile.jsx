"use client"
import Image from 'next/image';
import { FaEdit } from 'react-icons/fa';

const UserProfile = ({ user }) => {
    // Your provided user data
    // const user = {
    //     _id: {
    //         $oid: "6a33aa34d9ba6022dca516d9"
    //     },
    //     name: "Md Romjan Ali",
    //     email: "tanant@gmail.com",
    //     emailVerified: false,
    //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1a3iA8eqCsB_s3Yh8XJDVgN4H1KCwnuaqegb-YG-ynm2uEXXS2smE68B&s=10",
    //     createdAt: {
    //         $date: "2026-06-18T08:20:04.789Z"
    //     },
    //     updatedAt: {
    //         $date: "2026-06-18T08:20:04.789Z"
    //     },
    //     role: "tanant",
    //     banned: false
    // };


    const handleEdit = () => {
        // console.log("Edit profile clicked for:", user._id.$oid);
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mt-6">
            {/* Top Decorative Banner */}
            <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

            {/* Profile Content */}
            <div className="relative px-6 pb-6 text-center">
                {/* Avatar Setup */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <Image
                        className="w-24 h-24 rounded-xl border-4 border-white object-cover shadow-lg bg-gray-100"
                        src={user?.image}
                        alt={user?.name}
                        width={70}
                        height={70}
                    />
                </div>

                {/* User Info Breakdown */}
                <div className="pt-14">
                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                        {user?.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5">{user.email}</p>

                    {/* Role Badge */}
                    <div className="mt-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 uppercase tracking-wider border border-indigo-100">
                            {user?.role}
                        </span>
                    </div>
                </div>

                <hr className="my-5 border-gray-100" />

                {/* Joining Metadata */}
                <div className="flex justify-between items-center text-sm px-2 text-gray-600">
                    <span className="font-medium">Joined Platform</span>
                    <span className="text-gray-500">{new Date(user?.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}</span>
                </div>

                {/* Edit Profile Action Button */}
                <button
                    onClick={handleEdit}
                    className="mt-6 w-full inline-flex justify-center items-center space-x-2 px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
                >
                    <FaEdit size={16} />
                    <span>Edit Profile</span>
                </button>
            </div>
        </div>
    );
};

export default UserProfile;