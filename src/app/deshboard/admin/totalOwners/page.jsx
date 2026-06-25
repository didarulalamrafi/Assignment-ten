
import NotFoundData from '@/component/NotFoundData';
import AdminPropertyUpdate from '@/component/updateHandle/AdminPropertyHandle';
import { totalPorperty } from '@/lib/admin/getadmin';
import Image from 'next/image';
import { Suspense } from 'react';
const OwnerPropertyTable = async () => {

    const properties = await totalPorperty()
    console.log(properties, 'from get owner data');
    const notFound = {
        title: 'No Properties',
        description: 'Total Property Page is empty',
        button: 'Home',
        href: '/deshboard/admin'
    }
    return (
        <>
            {
                properties?.length === 0 ?
                    <Suspense>
                        <NotFoundData notFound={notFound} />
                    </Suspense>
                    :
                    <div className="container w-full">
                        <h1 className='text-3xl font-bold text-gray-600 mb-4'>Manage <span className='text-cyan-500'>Properties</span></h1>


                        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                            <table className="min-w-full bg-white divide-y divide-gray-200 text-left text-lg font-light text-gray-900">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Image</th>
                                        <th scope="col" className="px-6 py-4">Property Name</th>
                                        <th scope="col" className="px-6 py-4">MonthlyRent</th>
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
                                            <td className="px-6 py-4 whitespace-nowrap text-xl font-medium text-gray-800 capitalize">
                                                {property?.propertyName}
                                            </td>
                                            {/* Create Date Column */}
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                                {property?.monthlyRent}
                                            </td>
                                            {/* status */}
                                            <td
                                                className={`px-6 text-[14px] py-4 whitespace-nowrap font-semibold ${property?.status === "Approved"
                                                    ? "text-green-600"
                                                    : property?.status === "Rejected"
                                                        ? "text-red-600"
                                                        : property?.status === "Pending"
                                                            ? "text-yellow-600"
                                                            : "text-gray-500"
                                                    }`}
                                            >
                                                {property?.status}
                                            </td>
                                            {/* Action Buttons Column */}
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <div className="flex justify-center items-center space-x-3">
                                                    <AdminPropertyUpdate id={property._id} title={property?.propertyName} />

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

export default OwnerPropertyTable;