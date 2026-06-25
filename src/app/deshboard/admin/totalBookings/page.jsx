import NotFoundData from "@/component/NotFoundData";
import { totalBookingsData } from "@/lib/admin/getadmin";
import { Suspense } from "react";

export default async function TotalBookings() {
    const bookded = await totalBookingsData()
    const notFound = {
        title: 'No Bookings',
        description: 'Total Booking Page is empty',
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
                        <h1 className='text-3xl font-bold text-gray-600 my-4'>All Booking <span className='text-cyan-500'>Properties</span></h1>

                        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                            <table className="min-w-full bg-white divide-y divide-gray-200 text-left text-lg font-light text-gray-900">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-3 text-left">Title</th>
                                        <th className="p-3 text-left">Email</th>
                                        <th className="p-3 text-left">Price</th>
                                        <th className="p-3 text-left">Status</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {bookded.map((item) => (
                                        <tr key={item._id} className="border-t">
                                            <td className="p-3">{item.title}</td>
                                            <td className="p-3">{item.userEmail}</td>
                                            <td className="p-3">{item.price}</td>
                                            <td className="p-3">
                                                <span
                                                    className={`px-2 py-1 rounded text-white text-sm ${item.status === "Approved"
                                                        ? "bg-green-500"
                                                        : item.status === "Rejected"
                                                            ? "bg-red-500"
                                                            : "bg-yellow-500"
                                                        }`}
                                                >
                                                    {item.status}
                                                </span>
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