
import DeleteOwnerProperty from '@/component/alldeleteHandle/DeleteOwnerProperty';
import NotFoundData from '@/component/NotFoundData';
import { OwnerRejectDsiplayModal } from '@/component/OwnerRejectDisplayModal';
import UpdateProperty from '@/component/UpdateModale';
import { getOwnerData } from '@/lib/owner/ownerget';
import { userSession } from '@/lib/session';
import Image from 'next/image';
import { Suspense } from 'react';
const PropertyTable = async () => {

    const notFound = {
        title: 'No My Properties',
        description: 'You have not added any properties to your Project yet',
        button: 'Add Property',
        href: '/deshboard/owner/addProperty'
    }
    const user = await userSession()
    const properties = await getOwnerData(user?.id)
    return (
        <>
            {
                properties.length === 0 ?
                    <Suspense fallback={<h1>loading...</h1>}>
                        <NotFoundData notFound={notFound} />
                    </Suspense>
                    :
                    <div className="container w-full">
                        <h1 className='text-3xl font-bold text-gray-600 my-4'>My <span className='text-cyan-500'>Properties</span></h1>
                        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                            <table className="min-w-full bg-white divide-y divide-gray-200 text-left text-lg font-light text-gray-900">
                                <thead className="text-gray-900 ">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Image</th>
                                        <th scope="col" className="px-6 py-4">Property Name</th>
                                        <th scope="col" className="px-6 py-4">Created Date</th>
                                        <th scope="col" className="px-6 py-4">Status</th>
                                        <th scope="col" className="px-6 py-4 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {properties.map((property) => (
                                        <tr key={property._id} className="hover:bg-gray-50 transition-colors">
                                            {/* Image Column */}
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <Image
                                                    className="h-14 w-20 object-cover rounded-md shadow-sm border border-gray-100"
                                                    src={property.image}
                                                    alt={property.propertyName}
                                                    width={50}
                                                    height={50}
                                                />
                                            </td>
                                            {/* Property Name Column */}
                                            <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-800 capitalize">
                                                {property?.propertyName}
                                            </td>
                                            {/* Create Date Column */}
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                                {new Date(property?.createdAt).toLocaleDateString("en-US", {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </td>
                                            {/* status */}
                                            <td
                                                className={`px-6 text-[14px] flex items-center gap-1 py-4 whitespace-nowrap font-semibold ${property?.status === "Approved"
                                                    ? "text-green-600"
                                                    : property?.status === "Rejected"
                                                        ? "text-red-600"
                                                        : property?.status === "Pending"
                                                            ? "text-yellow-600"
                                                            : "text-gray-500"
                                                    }`}
                                            >
                                                {property?.status}
                                                {property?.status === "Rejected" && <OwnerRejectDsiplayModal title={property?.propertyName} />}
                                            </td>
                                            {/* Action Buttons Column */}
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <div className="flex justify-center items-center space-x-3">
                                                    <UpdateProperty id={property?._id} />

                                                    <DeleteOwnerProperty id={property?._id} />
                                                </div>
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
};

export default PropertyTable;