import DeleteUsers from "@/component/alldeleteHandle/DeleteUsers";
import NotFoundData from "@/component/NotFoundData";
import UserRoleUpdate from "@/component/updateHandle/UserRoleUpdate";
import { getUserData } from "@/lib/admin/getadmin";
import Image from "next/image";
import { Suspense } from "react";


export default async function UserTable() {
    const allusers = await getUserData()
    const notFound = {
        title: 'Empty Users',
        description: 'No User login or Create Acount yet',
        button: 'Home',
        href: '/deshboard/admin'
    }
    return (
        <>
            {
                allusers?.length === 0 ?
                    <Suspense>
                        <NotFoundData notFound={notFound} />
                    </Suspense>
                    :

                    <div className="container w-full">
                        <h1 className='text-3xl mt-3 font-bold text-gray-600 mb-4'>Manage All <span className='text-cyan-500'>Users</span></h1>
                        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">

                            <table className="min-w-full bg-white divide-y divide-gray-200 text-left text-lg font-light text-gray-900">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-3 text-left">Image</th>
                                        <th className="p-3 text-left">Name</th>
                                        <th className="p-3 text-left">Email</th>
                                        <th className="p-3 text-left">Role</th>
                                        <th className="p-3 text-left">Update Role</th>
                                        <th className="p-3 text-left">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {allusers?.map((user) => (
                                        <tr key={user._id} className="border-t">
                                            {/* Image */}
                                            <td className="p-3">
                                                <Image
                                                    src={user?.image}
                                                    height={70}
                                                    width={70}
                                                    alt="user"
                                                    className="w-15 h-15 rounded-full object-cover"
                                                />
                                            </td>

                                            {/* Name */}
                                            <td className="p-3">{user?.name}</td>

                                            {/* Email */}
                                            <td className="p-3">{user?.email}</td>
                                            <td className="p-3">{user?.role}</td>
                                            {/* Role Select */}
                                            <td className="p-3">
                                                <UserRoleUpdate id={user?._id} />
                                            </td>

                                            {/* Action Button */}
                                            <td className="p-3">
                                                <DeleteUsers id={user?._id} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </>

    );
}