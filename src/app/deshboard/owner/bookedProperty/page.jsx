
import NotFoundData from "@/component/NotFoundData";
import OwnerBookUpdate from "@/component/updateHandle/OwnerBookUpdate";
import { getBookedData } from "@/lib/owner/ownerget";
import { userSession } from "@/lib/session";

import { Suspense } from "react";


export default async function BookedProperty() {
    const user = await userSession()
    const bookded = await getBookedData(user?.id)
    console.log(bookded, 'from bookded prperty');
    const notFound = {
        title: 'No Booked Properties',
        description: 'Never Booked your favourites yet',
        button: 'Dashboard Home',
        href: '/deshboard/owner'
    }
    return (
        <>
            {
                bookded.length === 0 ?
                    <Suspense fallback={<h1>loading...</h1>}>
                        <NotFoundData notFound={notFound} />
                    </Suspense>
                    :

                    <div className="container w-full">
                        <h1 className='text-3xl font-bold text-gray-600 my-4'>Booked<span className='text-cyan-500'> Properties</span></h1>

                        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
                            <table className="min-w-full bg-white divide-y divide-gray-200 text-left text-lg font-light text-gray-900">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="p-3 min-w-50 text-left">Title</th>
                                        <th className="p-3 text-left">Email</th>
                                        <th className="p-3 text-left">Price</th>
                                        <th className="p-3 text-left">Status</th>
                                        <th className="p-3 text-left">Action</th>
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
                                                    className={`px-2 py-1 rounded text-white text-[14px] ${item.status === "Approved"
                                                        ? "bg-green-500"
                                                        : item.status === "Rejected"
                                                            ? "bg-red-500"
                                                            : "bg-yellow-500"
                                                        }`}
                                                >
                                                    {item.status}
                                                </span>
                                            </td>

                                            <td className="p-3 flex gap-2">
                                                <Suspense fallback={<h1 className="text-black">loading...</h1>}>
                                                    <OwnerBookUpdate id={item?._id} />
                                                </Suspense>
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